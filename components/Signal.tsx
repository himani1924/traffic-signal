import React from 'react'

const Signal = () => {
  return (
    <div className='flex flex-col h-[210px] p-3 items-center justify-around bg-gray-900 rounded w-[100px]'>
        <div className='w-[50px] h-[50px] rounded-full bg-red-500'></div>
        <div className='w-[50px] h-[50px] rounded-full bg-yellow-300'></div>
        <div className='w-[50px] h-[50px] rounded-full bg-green-500'></div>
    </div>
  )
}

export default Signal