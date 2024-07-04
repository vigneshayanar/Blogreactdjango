import React from 'react'
import { Link } from 'react-router-dom'

const Jumbotron = () => {
  return (
    <div className="bg-blue-950 w-full  h-25 p-4 shadow-2xl">
            <h1 className='flex justify-center items-center p-4 text-5xl text-white font-bold	'>BlogHeaven to live</h1>
            <p className='flex justify-center items-center text-center text-white p-4'>Blog Haven is a creative space where you can explore diverse articles, share your thoughts, and connect with fellow writers. Powered by Django and React, we offer a seamless blogging experience with robust features and a user-friendly interface.</p>
            <div className='flex justify-center'>
            <button className='px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-700 mr-4'>Get Started ➜ </button>
          <button className='px-3 py-2 rounded-md hover:bg-blue-700 bg-gray-600 border-black'>learn more </button>
          
    </div>
    </div>
  )
}

export default Jumbotron