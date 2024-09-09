import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { MdEdit } from "react-icons/md";
import axios from 'axios';
import Modal from './Modal';

const Details = ({del}) => {
  const navigate=useNavigate()
  const [delet,setdelete]=useState(false)
  const{slug}=useParams()
  const [blog,setblog]=useState({})
  useEffect(()=>{
    axios.get(`https://blogreactdjango-3.onrender.com/blog/${slug}`)
    .then(res=>{
      console.log(res.data)
      setblog(res.data)
    })
  },[])
  const ondelete=()=>{
    axios.delete(`https://blogreactdjango-3.onrender.com/blog/${slug}`)
    .then(res=>{
      console.log(res.data)
      del()
      navigate('/')
    })

  }
  return (
    <div className='flex justify-center'>
        <div className='w-3/5 h-3/4 shadow-lg m-20 p-4'>
      <Link to='/'> <p className='font-bold mb-4'>&#x2190;back</p></Link> 
        <h1 className='text-3xl font-bold text-center uppercase '>{blog.title}</h1>
        <div className='flex gap-2 mt-4'>
           <Link to={`/blog-slug/edit/${slug}`}> <button  className=' flex px-3 py-1 bg-purple-600 rounded-lg font-medium'><MdEdit className='mr-2 mt-1 text-xl' />edit</button></Link>
           <button className=' flex px-2 py-1 bg-blue-700 rounded-lg font-medium' onClick={()=> setdelete(true)}><MdDelete className='mr-2 mt-1 text-xl'/>Delete</button>
           {delet && <Modal onclose={()=>setdelete(false)} ondelete={ondelete}/>}
        </div>
        <p className='text-justify mt-4'>{blog.content}</p>
        </div>
    </div>
  )
}

export default Details