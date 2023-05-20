import React from 'react'
import Feed from './Feed'
import Image from 'next/image'
import {urlPatternValidation} from '../utils/utils'

const Post = ({post,votes}) => {
  return (
    <div className='rounded-lg shadow-md border border-slate-200 m-4'>
        <div className=''>

            <h3>{post.title}</h3>
        </div>
        <div>
            <p>{post.content}</p>
        </div>
        <div>
            <Image src={`${urlPatternValidation(post.image)?post.image:'https://via.placeholder.com/150'}`} height={100} width={100} />
        </div>


    </div>
  )
}

export default Post