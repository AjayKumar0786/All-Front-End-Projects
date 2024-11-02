import React from 'react'
import Footer from '../components/Footer/Footer';
import './css/signUp.css';
import { useState } from 'react';
import Login from '../components/login/Login';
import Signup from '../components/login/Signup';


const Loginsignup = () => {
const [show,setShow] = useState(true);
const handleshow=()=>{
  setShow(!show);
}
 return (
<>
<section className='sign_up_container'>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-5">
          {show?<Signup></Signup>:<Login></Login>}
          <h6 className='already_text'>Already have an account? <span className='login_here' onClick={handleshow} role='button' >{show?'Login here':'Signup here'}</span></h6>
          <p className='already_text'><input type="checkbox" name="checkbox" /> By continuing. i agree to the term of use & privacy</p>
       
        
      </div>
    </div>
    
  </div>
  <Footer></Footer>
</section>


</>
  )
}

export default Loginsignup
