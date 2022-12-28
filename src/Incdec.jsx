import React, { useState } from "react";

const Incdec=()=>
{
    const [value,setvalue]=useState(0);
    const inc=()=>{
          setvalue(value+1);
    }
    const dec=()=>{
        if(value<=0)
        {
            alert('not decremented');
        }
        else
         setvalue(value-1);
    }
    return(
        <>
            <h1>{value}</h1>
            <button onClick={inc}></button>
            <br></br>
            <button onClick={dec}>dec</button>
        </>
    )
}
export default Incdec;