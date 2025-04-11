import React from 'react'

type SignalProps = {
    status: "green" | "yellow" | "red"
}
const Signal = ({status}: SignalProps) => {
  return (
    <div className='flex flex-col h-[130px] p-3 items-center justify-between bg-gray-900 rounded w-[70px]'>
        <div className={`w-[30px] h-[30px] rounded-full ${status ==='red' ? 'bg-red-500':'bg-white'}`}></div>
        <div className={`w-[30px] h-[30px] rounded-full ${status ==='yellow' ? 'bg-yellow-500':'bg-white'}`}></div>
        <div className={`w-[30px] h-[30px] rounded-full ${status ==='green' ? 'bg-green-500':'bg-white'}`}></div>
    </div>
  )
}

export default Signal