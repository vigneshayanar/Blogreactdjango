import React from 'react'
import { Link } from 'react-router-dom'
const Containerbag = ({blog}) => {
  let content=blog.content.substring(0,150)+"...."
  return (
    <div className='shadow-2xl p-6 flex-1 min-w-80 rounded-lg	'>
        <h1 className='font-bold text-xl text-left mb-2'>{blog.title}</h1>
        <p className='text-left mb-2 text-gray-700'>
        {content}
        </p>
        <Link to={`blog/${blog.slug}`}> <button className='px-2 py-1 rounded-lg text-center bg-blue-900 hover:bg-blue-500'>Read more ➜</button>
        </Link> 
    </div>
  )
}

export default Containerbag