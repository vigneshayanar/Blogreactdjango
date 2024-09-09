import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Modal from './Modal'

const Editblogpage = ({editblog}) => {
  const navigate=useNavigate()
  const {slug}=useParams()
  const [data,setdata]=useState({})
  const [title,setitle]=useState("")
  const [content,setcontent]=useState("")
  const updatedblog={
    title:title,
    content:content
  }
  useEffect(()=>{
    axios.get(`https://blogreactdjango-3.onrender.com/blog/${slug}`)
    .then(res=> {console.log(res.data)
      setdata(res.data)
      setitle(res.data.title)
      setcontent(res.data.content)
    })
  },[])
  const handle=(e)=>{
    e.preventDefault();
    console.log(updatedblog)
    axios.put(`https://blogreactdjango-3.onrender.com/blog/${slug}/`,updatedblog)
    .then(res=>{
      console.log(res.data)
      editblog(res.data)
      navigate('/')
    })
  }
  return (
    <div className="flex justify-center">
    <div className="w-96 h-auto m-20 shadow-lg p-10">
      <h1 className="text-center font-bold p-5">Edit blog</h1>
      <form className="space-y-4 " onSubmit={handle}>
        <div className="flex flex-col space-y-1">
          <label  htmlFor="title" className="font-semibold">Title</label>
          <input value={title}
            type="text"
            id="title"
            onChange={(e)=>setitle(e.target.value)}
            className="w-full h-8 border border-gray-400 px-2 outline-blue-950"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="body" className="font-semibold">Body</label>
          <textarea
            id="body"
            value={content}
            onChange={(e)=>setcontent(e.target.value)}
            placeholder="Enter your message"
            className="w-full h-24 border border-gray-400 px-2 outline-blue-950"
          />
        </div>
      <button className='w-full h-10 text-center bg-blue-700 text-white rounded-lg mt-10'>Edit Blog</button>
      </form>
    </div>
  </div>
  )
}

export default Editblogpage