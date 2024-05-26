'use client'
import React, { useState } from 'react'

export default function Timer() {
    const [days, setdays] = useState("")
    const [hours, sethours] = useState("")
    const [mins, setmins] = useState("")
    const [second, setsecound] = useState("")
    setInterval(() => {
        let countDown = new Date("Jun 17 , 2024 23:59:59 ").getTime();
        let difDays = countDown - new Date().getTime();
        let days: number = Math.floor(difDays / 1000 / 60 / 60 / 24);
        setdays(days.toString());
        let hours: number = Math.floor(difDays % (1000 * 60 * 60 * 24) / 1000 / 60 / 60);
        sethours(hours.toString());
        let mins: number = Math.floor(difDays % (1000 * 60 * 60) / 1000 / 60);
        setmins(mins.toString());
        let seconds: number = Math.floor(difDays % (1000 * 60) / 1000);
        setsecound(seconds.toString());
    }, 1000);
       
  return  <>
     <div className='flex justify-center items-center gap-x-2 font-extrabold    '>
      <div className='border-basic border rounded-xl glass-basic  flex flex-col items-center py-2 lg:px-4  '>
        <p className='text-basic font-semibold  lg:text-2xl text-lg inline   '>
          {
            days 
          }
        </p>
        <p className='text-basic font-semibold lg:text-2xl text-lg px-1 '>
            Days 
        </p>

        
      </div>
      <span className='text-basic font-semibold lg:text-2xl text-xl'>
            : 
        </span>
              <div className='border-basic border rounded-xl glass-basic shadow-md shadow-basic  flex flex-col items-center py-2 lg:px-4 '>

        <p className='text-basic font-semibold  lg:text-2xl text-lg inline  '>

          {
            hours 
          }
        </p>
        <p className='text-basic font-semibold lg:text-2xl text-lg px-1 '>
        Hours 
        </p>
        
      </div>
      <span className='text-basic font-semibold lg:text-2xl text-xl'>
            : 
        </span>
        <div className='border-basic border rounded-xl glass-basic shadow-md shadow-basic  flex flex-col items-center py-2 lg:px-4 '>

        <p className='text-basic font-semibold  lg:text-2xl text-lg inline  '>

          {
            mins 
          }
        </p>
        <p className='text-basic font-semibold lg:text-2xl text-lg px-1 '>
        Mins 
        </p>
        
      </div>
      <span className='text-basic font-semibold lg:text-2xl text-xl'>
            : 
        </span>
        <div className='border-basic border rounded-xl glass-basic shadow-md shadow-basic  flex flex-col items-center py-2 lg:px-4 '>

        <p className='text-basic font-semibold  lg:text-2xl text-lg inline  '>

          {
            second 
          }
        </p>
        <p className='text-basic font-semibold lg:text-2xl text-lg px-1 '>
        Seconds 
        </p>
        
      </div>
    </div>

    </>
}
