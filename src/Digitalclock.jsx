import React, { useState } from 'react';

const Digital=()=>{
    const time=new Date().toLocaleTimeString();


    const [ctime,setctime]=useState(time);
     
    const updatetime=()=>{
        setctime(new Date().toLocaleTimeString());
    }

    setInterval(updatetime,1000);

    return(
        <>
            <h1>{ctime}</h1>
        </>
    )
}
export default Digital;