import React from 'react'
import { MessageSquareX } from 'lucide-react';
import { CircleCheckBig } from 'lucide-react';
import { CircleOff } from 'lucide-react';

const Modal = ({onclose ,ondelete}) => {
  return (
    <div className=' flex justify-center items-center fixed inset-0 backdrop-blur-sm bg-white bg-opacity-30'>
        <div className='mt-10 flex flex-col gap-5 '>
            <button className='place-self-end' onClick={onclose}> <MessageSquareX  size={30}/></button>
            <div className='bg-indigo-600 rounded-xl px-20 py-10 flex-col gap-5 item-center'>
            <h1 className='text-3xl font-extrabold'>Are want to delete the Blog</h1>
            <div className='flex mt-7 justify-center '>
                <button className=' flex gap-2 px-2 py-2 bg-blue-900 hover:bg-blue-500 rounded ' onClick={ondelete}>Yes  <CircleCheckBig /></button>
                <button className=' flex gap-2 px-2 py-2 bg-red-900 hover:bg-red-500 rounded ml-5' onClick={onclose}>No <CircleOff /></button>
            </div>
            </div>
        </div>
        </div>
  )
}

export default Modal