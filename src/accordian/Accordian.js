import React, { useState } from 'react'
import './Accordian.css'
import Myaccordian from './Myaccordian'
import { questions } from './api';
function Accordian() {

    const [data,setdata]=useState(questions);
  return (
    <>
    <section className='main-div'>
    <h1>React interview question</h1>
    {
        data.map((currelem)=>{
            const {id}=currelem;
       return <Myaccordian key={id} {...currelem}/>
        })
     } 
    </section>
   
    </>
  )
}

export default Accordian
