import React from 'react'
import Post from './Post';
import {getServerSession} from 'next-auth/next'
import { authOptions } from '../app/api/auth/[...nextauth]/route';


export async function getData() {

  let session = await getServerSession(authOptions)
    // Fetch data from external API
    let payload = {
      method: "GET",
      headers: {
        Authorization:
          `Bearer ${session?.user.access_token}`,
        "Content-Type": "application/json",
      },
    };

    try{
      let res = await fetch(
        `${process.env.LOCAL_URL}/posts/?post_limit=10&skip=0`,
        payload
        );
        
        const data = res.status>200?null:await res.json();

        return data;
    }catch(e){
      console.log("error",e)
    }
    // console.log(res);
  
    // Pass data to the page via props
  }
  

const Feed = async() => {
    let data = await getData();
    console.log(data)
  return (
    <div className='flex-col justify-between flex-grow max-w-screen-md '>
        {/* {console.log(data)} */}
        {
            data?data.map((post,index)=>{
                return (
                    <Post post={post.post} votes={post.votes} />
                )
            }):<></>
        }
    </div>
  )
}



export default Feed