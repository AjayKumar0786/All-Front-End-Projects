import React from 'react'
import { useState } from 'react';
import './style.css';
const Signup = () => {
const [input,Setinput] = useState({});
       
    const handlechange =(e)=>{
     const{name,value} = e.target;
     Setinput((prev)=>{
       return {...prev,[name]:value};
     })
    }
  return (
    <div className='sign_up_box'>
        <h4>Sign Up</h4>
        <form action="/Signup" method='post'>
          <div className='custom_form'>
          <input type="text" className= "form-control" placeholder='Your Name' name  ="name" onChange={handlechange} value= {input.name} required />
          </div>

          <div className='custom_form'>
          <input type="email" className= "form-control" placeholder='Your Email' name  ="email" onChange={handlechange} value={input.email} required/>
          </div>

          <div className='custom_form'>
          <input type="password" className= "form-control"  placeholder='Password' name  ="password" onChange={handlechange} value={input.password} required />
          </div>
          <div><button className='continue_btn'>Continue</button></div>
         </form>
    </div>
  )
}

export default Signup
