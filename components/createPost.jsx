'use client'
import React from 'react'
import {useForm} from 'react-hook-form'
import { useSession } from 'next-auth/react'

const CreatePost = () => {
  const {data, status}= useSession()
  const { register,formState:{errors}, handleSubmit }=useForm()
  return (
    <div className='border-sm shadow-md p-4'>

      <h2 className='text-lg tracking-wider mb-3'>Create a post</h2>

      <form className='flex flex-col justify-around' onSubmit={handleSubmit(async(formData)=>{


        let fd=new FormData()
        fd.append("image",formData.image[0])

        let res = await fetch(`http://127.0.0.1:8000/posts/upload-image`,
        {
          method:"POST",
          body:fd
        })

        let response = res.status<=201?await res.json():null

        let body={
          title: formData.title,
          content: formData.content,
          published: formData.publish,
          image: response.image_url?response.image_url:null
        }

        let payload={
          method:"POST",
          body:JSON.stringify(body),
          headers:{
            'Content-Type':'application/json',
            Authorization:`Bearer ${status=="authenticated"?data?.user.access_token:""}`
          }
        }
        res= await fetch(`http://127.0.0.1:8000/posts/`,payload)
      })}>

        <div className='m-3'>
        <label htmlFor="title">Title: &nbsp;
        <input type="text" {...register("title",{required:{value:true,message:"This field is required!"}}) }/>
        </label>
        <p>{errors.title?.message}</p>
        </div>
        <div className='m-3'>
        <label htmlFor="content">content: &nbsp;
        <textarea type="text" {...register("content",{required:{value:true,message:"This field is required!"}}) }/>
        </label>
        <p>{errors.content?.message}</p>
        </div>
        <div className='m-3'>
        <label htmlFor="publish">publish: &nbsp;
        <input type="checkbox" {...register("publish",{required:{value:true,message:"This field is required!"}}) }/>
        </label>
        <p>{errors.content?.message}</p>
        </div>
        <div className='m-3'>
        <label htmlFor="image">Image: &nbsp;
        <input type="file" accept='.jpg,.webp' {...register("image",{}) }/>
        </label>
        <p>{errors.image?.message}</p>
        </div>
        <input className='p-3 border border-black rounded-md' type="submit" />
      </form>
    </div>
  )
}

export default CreatePost