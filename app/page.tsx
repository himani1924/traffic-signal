'use client';

import Signal from "@/components/Signal";
import { useEffect, useState } from "react";


export default function Home() {
  const directions = ['North' , 'West' , 'South' , 'East' ];
  const [ind, setInd] = useState(0)
  const [display, setDisplay] = useState(true)
  const [time, setTime] = useState({
    North: 0,
    West: 0,
    South: 0,
    East: 0
  })

  useEffect(()=>{

  },[display])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTime((prev) => ({
      ...prev,
      [name]: value
    }))

  }

  const handleStop = () =>{
    setDisplay(!display)
    setTime({
      North: 0,
      West: 0,
      South: 0,
      East: 0
    })
  }

  return (
    <div>
    {
      display ? (
    <div className="flex flex-col items-center w-full justify-center gap-5 bg-gray-200 p-10">
      {
        directions.map((d)=>(
          <div key={d} className="flex w-[400px] flex-1 items-center justify-between gap-10 ">
            <label>{d} (in seconds)</label>
            <input 
            type="number" 
            name={d} 
            value={time[d]}
            onChange={handleChange}
            className="border p-1 rounded align-center justify-center bg-white" />
          </div>
        ))
      }
      <button className="border px-10 py-2 bg-green-400" onClick={()=>{setDisplay(!display)}}>start</button>
    </div>
      ):(
        <div className="w-full flex flex-col items-center justify-center p-2 mb-5">
          <button className="border px-10 py-2 bg-red-400" onClick={handleStop}>Stop</button>
        </div>
      )
    }

    {
      !display && (
      <div className="grid grid-cols-3 grid-rows-3 gap-3 items-center w-full">
        <div></div>
        <div className="flex items-center justify-center"><Signal/></div>
        <div></div>
        <div className="flex items-center justify-center"><Signal/></div>
        <div></div>
        <div className="flex items-center justify-center"><Signal/></div>
        <div></div>
        <div className="flex items-center justify-center"><Signal/></div>
        <div></div>
      </div>
      )
    }
    </div>
  );
}
