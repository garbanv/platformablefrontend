import React,{useEffect, useState} from 'react'

export default function Test() {

    const [post,setPost]=useState([]);

    useEffect(()=>{
        fetch(`https://websiteserver-ds7cf.ondigitalocean.app/posts/1`)
        .then(res=>res.json())
        .then(response=>setPost(response))
        },[]) 

    return (
        <div>
          Test Page
            
        </div>
    )
}
