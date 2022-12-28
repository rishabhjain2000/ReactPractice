import React, { useState } from "react";


const Event=()=>{

    const purple='#8e44ad';
    const name="click me";
    const [bg,setbg]=useState(purple);
    const [bname,setbname]=useState(name)
 const bgchange=()=>{
 const red= "red"
    setbg(red)
    setbname("hello")
 }
 const bgback=()=>{

    setbg(purple);
    setbname(name);
 }

    return(
        <>
            <div style={{backgroundColor:bg,fontSize:"50px"}}>
              <button onClick={bgchange} onDoubleClick={bgback}>
               {bname}</button>
              <h1>hello how are yuiu</h1>
            </div>
        </>
    )
}
export default Event;