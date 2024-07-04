import React, { useEffect, useState } from 'react'
import Containerbag from './Containerbag'
import axios from 'axios';
import Spinner from './Spinner';
const Blogcontent = () => {
  const [blog,setblog]=useState([])
  const[loading,srtloading]=useState(true)
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/blog/recent')
    .then(res=> {console.log(res.data)
      setblog(res.data)})
      srtloading(false)
  },[])
  return (
    <div class="flex flex-wrap mt-8 mb-8 justify-evenly gap-5 p-4">
      <Spinner loading={loading}/>
      {blog.map((blog)=><Containerbag key={blog.id} blog={blog}/>)}
  </div>
  )
}

export default Blogcontent;