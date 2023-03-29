import React from "react";
import Home from './Home'
import {Routes,Route} from 'react-router-dom'
import Login from "./Login"
import Register from "./Register"
import Aboutus from "./Aboutus"
import Contactus from "./Contactus"
import Error from "./Error"
import "./style.css"
export default function App() {
  return (
    
     <Routes>
     <Route path='/'element={<Home/>}/>
     <Route path='/login'element={<Login />}/>
     <Route path='/register'element={<Register/>}/>
     <Route path='/Abooutus'element={<Aboutus/>}/>
     <Route path='/Contactus'element={<Contactus/>}/>
     <Route path='*' element={<Error/>}/>
      </Routes>
    
  );
}
