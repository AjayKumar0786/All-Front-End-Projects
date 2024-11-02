import React from 'react';
import './Slide.css';
const Side = () => {
  return (
    <div className=''>
        <ul class=" gap-3">
        <li class="nav-item"onClick={()=>setMenu("shop")}>  <Link style={{textDecoration:"none"}}  className ="text-dark"to='/'>Shop</Link>     {menu==="shop"?<hr></hr>:<></>} </li>
        <li class="nav-item"onClick={()=>setMenu("men")}>     <Link style={{textDecoration:"none"}} className ="text-dark"  to='/men'>Men</Link>   {menu==="men"?<hr></hr>:<></>}</li>
        <li class="nav-item"onClick={()=>setMenu("women")}>     <Link style={{textDecoration:"none"}} className ="text-dark" to ='/women'>Women</Link> {menu==="women"?<hr></hr>:<></>}</li>
        <li class="nav-item"onClick={()=>setMenu("kids")}>      <Link style={{textDecoration:"none"}} className='text-dark' to='/kids'>Kids</Link> {menu==="kids"?<hr></hr>:<></>}</li>
       
        
      </ul>
    </div>
  )
}

export default Side
