import React, { useState } from 'react'

const Search=()=> {

    const [img,setImg]=useState('');

    const inputevent=(event)=>{
        const data=event.target.value;
        console.log(data)
        setImg(data);
    }
  return (
   <>
 <div className='searchbar'>

 <input type="text" placeholder='search anything' value={img} onChange={inputevent}/>
 </div>

   </>
      
    
  )
}

export default Search
