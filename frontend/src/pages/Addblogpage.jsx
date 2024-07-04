import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const Addblogpage = ({createblog}) => {
  const [title,settitle]=useState('')
  const navigate=useNavigate()
  const[content,setcontent]=useState('')
  const newblog={
    title:title,
    content:content
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(newblog)
    createblog(newblog)
    navigate('/')
  
  }
  return (
    <div className="flex justify-center">
      <div className="w-96 h-auto m-20 shadow-lg p-10">
        <h1 className="text-center font-bold p-5">Add a New Blog</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-1">
            <label htmlFor="title" className="font-semibold">Title</label>
            <input
              type="text"
              id="title"
              className="w-full h-8 border border-gray-400 px-2 outline-blue-950"
              onChange={(e)=>settitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="body" className="font-semibold">Body</label>
            <textarea
              id="body"
              onChange={(e)=>setcontent(e.target.value)}
              placeholder="Enter your message"
              className="w-full h-24 border border-gray-400 px-2 outline-blue-950"
            />
          </div>
        <button className='w-full h-10 text-center bg-blue-700 text-white rounded-lg mt-10' >Add Blog</button>
        </form>
      </div>
     
    </div>
  );
}

export default Addblogpage;
