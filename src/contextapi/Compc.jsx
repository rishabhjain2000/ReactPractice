import React from 'react'
import { Firstname } from '../App';
const Compc=()=>{
    return(
        <>
 <Firstname.Consumer>
    {(fname)=>{
 return <h1>my name is {fname} from component c</h1>
      
    }}
  </Firstname.Consumer>

        </>
 
    )
}
export default Compc;