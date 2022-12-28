import React from 'react'
import { useParams ,useLocation} from 'react-router-dom'
const Userparam=()=> {
    const {fname}=useParams();
    const location=useLocation();
    console.log(location);
  return (
    <div>
      <h1>user {fname}param</h1>
      <p>
        Mycurrenr location is {location.pathname}
      {location.pathname==`/user/vinod`?
      <button> click me</button>:null
      }
      </p>
    </div>
  )
}

export default Userparam
