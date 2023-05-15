import React from 'react'
import Post from './Post';

export async function getData() {
    // Fetch data from external API
    let payload = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2ODQwNzY2NjB9.hykSHWg4Jglk2TwugMvhpC5dUn8Y0OS4cW4ixT-WEyM",
        "Content-Type": "application/json",
      },
    };
    let res = await fetch(
      "https://simple-social.onrender.com/posts/?post_limit=10&skip=0",
      payload
    );
    console.log(res);
    const data = await res.json();
  
    // Pass data to the page via props
    return data;
  }
  

const Feed = async() => {
    let data = await getData();
  return (
    <div className='flex-col justify-between flex-grow max-w-screen-md'>
        {console.log(data)}
        {
            data.map((post,index)=>{
                return (
                    <Post post={post.post} votes={post.votes} />
                )
            })
        }
    </div>
  )
}



export default Feed