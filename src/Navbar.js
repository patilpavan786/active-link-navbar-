import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Navabar.css"
export default function Navbar(){
  return(
    <div style={{display:"flex" ,gap:"2rem", textDecoration:"none" ,backgroundColor:"aqua" , height:"3rem"}}>
<NavLink className="navabar"  to ='/'>home</NavLink>
<NavLink className="navabar" to='/register'>register</NavLink>
<NavLink className="navabar" to='/login'>login</NavLink>
<NavLink className="navabar" to='/Contactus'>Contactus</NavLink>
<NavLink className="navabar" to='/Abooutus'>aboutus</NavLink>
    </div>
  )
}