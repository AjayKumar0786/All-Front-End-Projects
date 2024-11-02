import React, { useContext } from 'react'
import { useState } from 'react'
import {Link,Outlet} from 'react-router-dom'
import './navbar.css'
import { ShopContext } from '../../context/Shop_context'
const Header = () => {
const[menu,setMenu] = useState("shop");  
const{getTotalcartitems} = useContext(ShopContext);
const color ={
  color:"red",
  textDecoration: "none"
}

  return (

    <>
    <nav class="navbar navbar-expand-lg custom-nav align-items-center ">
  <div class="container ">
  <button class="mobile_toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="/">
    <p className='main-logo'>  <img src="./img/EASYSHOP.webp" alt=""  className='img-fluid w-75'/></p>
    </a>

    <div className='nav_Mobile '>
    <Link to='/login' className='user_icon'><i class="fa-regular fa-circle-user"></i></Link>
      <Link to ='/cart' className='cart_icon'>  <img width="32" height="32" src="https://img.icons8.com/material-outlined/96/fast-cart.png" alt="fast-cart"/></Link>
        <div className='cart_count'>{getTotalcartitems()}</div>
      </div>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
        <li class="nav-item"onClick={()=>setMenu("shop")}>  <Link style={{textDecoration:"none"}}  className ="text-dark"to='/'>Shop</Link>     {menu==="shop"?<hr></hr>:<></>} </li>
        <li class="nav-item"onClick={()=>setMenu("men")}>     <Link style={{textDecoration:"none"}} className ="text-dark"  to='/men'>Men</Link>   {menu==="men"?<hr></hr>:<></>}</li>
        <li class="nav-item"onClick={()=>setMenu("women")}>     <Link style={{textDecoration:"none"}} className ="text-dark" to ='/women'>Women</Link> {menu==="women"?<hr></hr>:<></>}</li>
        <li class="nav-item"onClick={()=>setMenu("kids")}>      <Link style={{textDecoration:"none"}} className='text-dark' to='/kids'>Kids</Link> {menu==="kids"?<hr></hr>:<></>}</li>
       
        
      </ul>
      <div className='nav_Login '>
    <Link to='/login'>  <button type="button" className=" me-4 login_btn">Login</button></Link>
      <Link to ='/cart'>  <img width="40" height="40" src="https://img.icons8.com/material-outlined/96/fast-cart.png" alt="fast-cart" className='img-fluid'/></Link>
        <div className='cart_count'>{getTotalcartitems()}</div>
      </div>
    
    </div>
  </div>
</nav>

    </>
  )
}

export default Header
