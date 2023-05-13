import React, { useEffect } from 'react';
import { useState } from 'react';

export default function Timer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US'))
  
  useEffect(()=>{
    setTimeout(() => {
      setTime(new Date().toLocaleTimeString('en-US'))
      
    }, 1000);
  },[time])

  return (
    <div className='text-center ' style={{paddingTop:'25vh',paddingBottom:'25vh'}}>
      <h1>Local time is {time} </h1>  
    </div>
  )
}
