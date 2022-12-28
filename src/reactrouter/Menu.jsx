import React from 'react'
import { NavLink } from 'react-router-dom'
function Menu() {
  return (
  <>
  <NavLink exact activeClassName="active_class" to='/'>Aboutus</NavLink>
  <NavLink  exact activeClassName="active_class"
    to='/contact'>Contact</NavLink>

  <h1> using anchor</h1>

    <a href='/'>Aboutus</a>
    <a href='/contact'>Contact</a>
  </>
  )
}

export default Menu
