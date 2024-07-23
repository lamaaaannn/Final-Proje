import React from 'react'
import { NavLink, Navlink } from 'react-router-dom'

const Navbar=()=>{
  return (
    <div className='navbar'>

      <div className='navRight'>
      <img src="./images/DevAcademy.png" alt="" srcset="" />
      </div>
       <div className='navLeft'>
<div className="links">
  <NavLink to="/Home">Home</NavLink>
  <NavLink to="/Services" >Service</NavLink>
  <NavLink to="/Projects" >Projects</NavLink>
  <NavLink to="/Blog"></NavLink>
  <NavLink to="/About"></NavLink>
</div>
<button>Contact</button>
<img className="menu" src="./images/menu.svg" alt="" />

      </div>

    </div>
  )
}
export default Navbar