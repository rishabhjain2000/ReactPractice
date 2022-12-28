import React, { useState } from "react";

const Login = () => {
    const [name,setname]=useState('');
    const [surname,setsurname]=useState('');
    const [f1,setf1]=useState();
    const [f2,setf2]=useState();
    const first=(event)=>{
        console.log(event.target.value)
       setname(event.target.value);
    }
    const second=(event)=>{
       setsurname(event.target.value)
    }
    const submit=(e)=>{
     e.preventDefault();
      setf1(name);
      setf2(surname);
    }
    return (
        <>
        <form onSubmit={submit}>
              <h1>hello {f1} {f2}</h1>
            <input type="text" placeholder="enter first name" value={name} onChange={first} /><br></br>
            <input type="text" placeholder="enter last name" value={surname} onChange={second}/><br></br>
            <button type="submit">Submit</button>
        </form>
            
        </>
    )
}
export default Login;