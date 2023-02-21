import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Navbar(){
  return(
    <div style={{display:"flex" ,gap:"2rem"}}>
<NavLink to ='/'>home</NavLink>
<NavLink to='/register'>register</NavLink>
<NavLink to='/login'>login</NavLink>
<NavLink to='/Contactus'>Contactus</NavLink>
<NavLink to='/Abooutus'>aboutus</NavLink>
    </div>
  )
}