import React from 'react'
import './Bread.css';
import arrow_icon from '../../../public/Assets/breadcrum_arrow.webp'
const Bread = ({product}) => {

  return (
   <section className='container'>
     <div className='Bread_cum'>
        HOME <img src={arrow_icon} alt=""  className='breadcrum_arrow img-fluid'/> SHOP <img src={arrow_icon} alt="" className='breadcrum_arrow'/> {product.category} <img src={arrow_icon} alt="" className='img-fluid breadcrum_arrow' /> {product.name} 
     </div>
   </section>
  )
}

export default Bread
