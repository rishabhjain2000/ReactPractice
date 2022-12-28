import React, { useEffect, useState } from 'react'

function Useeffect() {

    const [num,setnum]=useState(0);
    
    
    useEffect(()=>{
        document.title=`you clicked me ${num} times`

    },)


  return (
    <>
      <button onClick={()=>{
        setnum(num+1);
      }}>click me {num}</button>
    </>
  )
}

export default Useeffect
