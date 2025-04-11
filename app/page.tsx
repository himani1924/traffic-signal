'use client';

import Signal from "@/components/Signal";
import { useEffect, useState } from "react";


export default function Home() {
  const directions = ['North' , 'East' , 'South' , 'West' ];
  const [ind, setInd] = useState(0)
  const [display, setDisplay] = useState(true)
  const [countdown, setCountdown] = useState(0)
  const [time, setTime] = useState({
    North: 1,
    West: 1,
    South: 1,
    East: 1
  })

  useEffect(()=>{
    let timer;
    if(!display){
      if(countdown >0){
        timer = setInterval(()=>{
          setCountdown((prev) => prev - 1)
        }, 1000)
        }
        else{
          const newIndex = (ind + 1) % directions.length;
          setInd(newIndex)
          setCountdown(parseInt(time[directions[newIndex]]))
        }
      }
      return () => clearTimeout(timer);
  },[display, countdown, ind])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if(parseInt(value) < 1) return;
    const round = Math.round(parseInt(value))
    setTime((prev) => ({
      ...prev,
      [name]: String(round)
    }))

  }

  const handleStart = () =>{
    setInd(0)
    setCountdown(parseInt(time[directions[0]]))
    setDisplay(!display)
  }

  const handleStop = () =>{
    setDisplay(!display)
    setCountdown(0)
    setTime({
      North: 1,
      West: 1,
      South: 1,
      East: 1
    })
  }

  const getLight = (d: string):"green" | "yellow" | "red"  =>{
    if(d === directions[ind]){
      return 'green';
    }
    const total = time['North'] + time['West'] + time['South'] + time['East'];
    // let timeLeft = total - time[directions[ind-1]];
    // if(d===directions[(ind+1)%4] && time[directions[(ind+1)%4]] <= 2) return 'yellow';
    if(d===directions[(ind+1)%4] && countdown <= 2) return 'yellow'
    else return 'red';
    return 'red';
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
      <button className="border px-10 py-2 bg-green-400" onClick={handleStart}>start</button>
    </div>
      ):(
        <div className="w-full flex flex-col items-center justify-center p-2 mb-5">
          <button className="border px-10 py-2 bg-red-400" onClick={handleStop}>Stop</button>
        </div>
        
      )
      
    }
   {/* {
          directions.map((d)=>(
            <div key={d} className="flex w-[400px] flex-1 items-center justify-between gap-10 ">
              countdown {d} : {countdown}
              
            </div>
          ))
        } */}

{!display && (
  <p className="text-center font-bold text-xl">Countdown : {countdown}</p>
)}
    {
      !display && (
        <div className="flex items-center justify-center w-full mt-10">

      <div className="grid grid-cols-3 grid-rows-3 items-center w-3/4">
        <div></div>
        <div className="flex flex-col items-center border p-2 justify-center"><p>North</p><Signal status={getLight('North')}/></div>
        <div></div>
        <div className="flex flex-col items-center border p-2 justify-center"><p>West</p><Signal status={getLight('West')}/></div>
        <div></div>
        <div className="flex flex-col items-center border p-2 justify-center"><p>East</p><Signal status={getLight('East')}/></div>
        <div></div>
        <div className="flex flex-col items-center border p-2 justify-center"><p>South</p><Signal status={getLight('South')}/></div>
        <div></div>
      </div>
        </div>
        
      )
    }
    </div>
  );
}
