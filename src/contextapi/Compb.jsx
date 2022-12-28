import React, { useContext } from 'react'
import { Firstname } from '../App';
import Compc from './Compc';
const Compb=()=>{
  const fname=useContext(Firstname);

    return <h1>my name is component b {fname}</h1>
}
export default Compb;