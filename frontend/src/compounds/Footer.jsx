import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around items-center bg-blue-950 w-full h-25'>
        <h1 className='flex text-center font-bold text-xl text-white ml-24'>djangochat</h1>
        <div className=' flex flex-wrap m-10'>
            <div className='w-1/3 pt-3 font-semibold text-white'>Resources</div>
     <div className='w-1/3 pt-3 font-semibold text-white'>Follow us</div>
     <a href="https://www.linkedin.com/in/vignesh-a-bb1ba0214/"><div className='w-1/3 pt-3 font-semibold text-white'>Linkedin</div></a>
     <div className='w-1/3 pt-3 font-semibold text-white'>React</div>
         <div className='w-1/3 pt-3 text-gray-500'><a href="https://github.com/vigneshayanar"> Github</a> </div>
                     <div className='w-1/3 pt-3 text-gray-500'>Privacy Policy</div>
                     <div className='w-1/3 pt-3 text-gray-500'>Taliwand css</div>
                     <div className='w-1/3 pt-3 text-gray-500'>Discord</div>
                     <div className='w-1/3 pt-3 text-gray-500'>Terms & Conditions</div>
        </div>

    </div>
  )
}

export default Footer