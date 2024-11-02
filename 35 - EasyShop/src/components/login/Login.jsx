import React from 'react'
import './style.css';
const Login = () => {
  return (
    <div className='sign_up_box'>
         <h4>Login</h4>
        <form action="/login" method='post'>
       

          <div className='custom_form'>
          <input type="email" className= "form-control" placeholder='Your Email' name  ="email"  required/>
          </div>

          <div className='custom_form'>
          <input type="password" className= "form-control"  placeholder='Password' name  ="password" required />
          </div>
          <div><button className='continue_btn'>Continue</button></div>
         </form>
    </div>
  )
}

export default Login
