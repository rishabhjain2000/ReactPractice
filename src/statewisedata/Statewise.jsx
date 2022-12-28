import React, { useEffect } from 'react'

function Statewise() {
  
    const getcoviddata= async ()=>{
      const res=await fetch('https://api.covidtracking.com/v1/us/daily.json')
      const actualData=await res.json();
      console.log(actualData);
    }
    useEffect(()=>{
        getcoviddata();
    },[])
  return (
    <>
        <div className='container-fluid mt-5'>
             <div className='main-heading'>
                <h1 className='mb-5'>
                    <span classname='font-weight-bold'>INDIA</span>Covid 19 Dashboard
                </h1>
             </div>

             <div className='table-responsive'>
               <table className='table table-hover'>
<thead className='thead-dark'>
<tr>
    <th>state</th>
</tr>

</thead>
               </table>
             </div>
        </div>
    </>
  )
}

export default Statewise
