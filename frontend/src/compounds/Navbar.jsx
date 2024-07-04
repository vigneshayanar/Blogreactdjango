import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-blue-950 w-full flex justify-around items-center h-25 p-4 shadow-2xl">
    <Link to='/'><div className="text-white text-xl font-black font-bold">
    Blog Haven
    </div></Link>
    <div>
      <Link to="/add-blog">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow-lg">
        Add New Article
      </button></Link>
    </div>
  </div>
  
  )
}

export default Navbar