import React, { useState } from 'react'



const Change=()=>{
    const t=new Date().toLocaleTimeString();

    const [time,settime]=useState(t);
    const timechange=()=>{
     settime(new Date().toLocaleTimeString());
    }
    return(
        <>
        <h1>{time}</h1>
        <button onClick={timechange()}>change time</button>
    </>
  )
}
export default Change;