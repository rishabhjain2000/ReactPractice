import React, { useState } from "react";

const Login = () => {
    const [fullname, setfullname] = useState({
        fname: '',
        lname: '',
        email: '',
        number: ''
    });


    const InputEvent = (event) => {
        // const value = event.target.value;
        // const name = event.target.name;

        const {value,name}=event.target;
        
        setfullname((prevValue) => {
            return{
                ...prevValue,
                [name]:value
            }
            // if (name == 'fname') {
            //     return {
            //         fname: value,
            //         lname: prevValue.lname,
            //         email: prevValue.email,
            //         number: prevValue.number
            //     }

            // }
            // else if (name == 'lname') {
            //     return {
            //         fname: prevValue.fname,
            //         lname: value,
            //         email: prevValue.email,
            //         number: prevValue.number
            //     }
            // }
            // else if (name == 'email') {
            //     return {
            //         fname: prevValue.fname,
            //         lname: prevValue.lname,
            //         email: value,
            //         number: prevValue.number
            //     }
            // }
            // else if (name == 'number') {
            //     return {
            //         fname: prevValue.fname,
            //         lname: prevValue.lname,
            //         email: prevValue.email,
            //         number: value
            //     }
            // }
        })

    }

    const onsubmits = (e) => {
        e.preventDefault();
        alert('form submitted')
    }
    return (
        <>
            <form onSubmit={onsubmits}>
                <h1>hello {fullname.fname} {fullname.lname}
                    {fullname.email}{fullname.number}</h1>
                <input type="text" placeholder="enter first name"
                    value={fullname.fname}
                    name='fname'
                    onChange={InputEvent} /><br></br>

                <input type="text" placeholder="enter last name"
                    value={fullname.lname}
                    name='lname'
                    onChange={InputEvent} /><br></br>
                <input type="email" placeholder="enter email"
                    value={fullname.email}
                    name='email'
                    onChange={InputEvent} /><br></br>
                <input type="number" placeholder="enter number"
                    value={fullname.number}
                    name='number'
                    onChange={InputEvent} /><br></br>
                <button type="submit">Submit</button>
            </form>

        </>
    )
}
export default Login;