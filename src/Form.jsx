import React,{useState} from 'react';

const Form=()=>{
  
   const [first,setfirst]=useState("");
   const [fullname,setfullname]=useState("");  
     const inputevent=(event)=>{
       setfirst(event.target.value);  
     }
     const onsubmit=()=>{
        setfullname(first);
     }
   
    return(
        <>
            <h1>hello {fullname}</h1>
            <input type="text" placeholder='enter your name' 
                onChange={inputevent}
                value={first}
            /><br></br>
            <button onClick={onsubmit}>Submit</button>
        </>
    )
}
export default Form;