import React from 'react'
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Search from './Search';
import Service from './Service';
import { Route,Routes,NavLink ,Navigate} from 'react-router-dom';
import Userparam from './Userparam';

function Navbar() {
    const Name=()=>{
        return <h1>Name page</h1>
      }
  return (
    <div>
       {/* <Menu/> */}
 <NavLink exact activeClassName="active_class" to='/'>Aboutus</NavLink>
  <NavLink  exact activeClassName="active_class" to='/contact'>Contact</NavLink>
<NavLink exact activeClassName='active_class' to='/user/vinod'>User</NavLink>
<NavLink exact activeClassName='active_class' to='/search'>Search</NavLink>
<NavLink exact activeClassName='active_class' to='/service'>Service</NavLink>
     <Routes>
       <Route exact path='/' element={<About name='rishabh'/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/contact/name' element={<Name/>}/>
       <Route path='/user/:fname' element={<Userparam/>}/>
       <Route path='/search' element={<Search/>}/>
       <Route path='/service' element={<Service/>}/>
       <Route path='*' element={<Navigate to='/'/>}/>
    
     </Routes>
    </div>
  )
}

export default Navbar
