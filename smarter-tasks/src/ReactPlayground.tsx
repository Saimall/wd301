

import React from "react";
import {useState,useEffect } from "react"

interface Post {
  id: number;
  title: string;
  body: string;
}

const ReactPlayground=()=>{

    const [data,setData]=useState<Post[]>([])
    useEffect(()=> {

      const fetchData= async()=>{
        try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setData(data);
      }catch(error){
        console.log(error);
      }
       }
// fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => setData(data)).catch(error=>console.log(error));
     
   fetchData() //calling function    
    },[]);

    console.log(data)
    return (
        <div>
          <h1 className="text-4xl">Posts</h1>
          {
            data.map((item) =>(
              <div key={item.id}>
                <h2 className='text-2xl'>{item.title}</h2>
                 <p>{item.body}</p>
              </div>
            ))
          }
        </div>
      );
}

export default ReactPlayground;