import React, { useEffect, useState } from 'react'
import axios from 'axios'
function  Pokemon() {
    const [num,setnum]=useState();
    const [name,setname]=useState();
    const [moves,setmoves]=useState();

    useEffect(()=>{
        // alert('hi')
        async function getData(){
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
           console.log(res.data.name);
           setname(res.data.name);
           setmoves(res.data.moves.length);
        }

        getData();
    })
  return (
    <>
        <h1>you select this {num}</h1>
        <h1>my name is {name}</h1>
        <h1>i have {moves} moves</h1>
        <select value={num} onChange={(event)=>{setnum(event.target.value)}}>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="6">6</option>
        </select>
    </>
  )
}

export default Pokemon
