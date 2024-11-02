import React, { useContext, useState } from 'react'
import './Pro.css'
import star_icon from '../../../public/Assets/star_icon.webp';
import star_dull from '../../../public/Assets/star_dull_icon.webp';
import Footer from '../Footer/Footer'
import { ShopContext } from '../../context/Shop_context';
const ProDis = ({product}) => {
const {addTocart,success} = useContext(ShopContext);

const handleclick = ()=>{
   addTocart(product.id);
 
}

return (

  <>
   <section>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 product_left">

            <div className="row">
                <div className="col-lg-3 col-3">
                <div className="product_img_list">
               <ul className='p-0 m-0 list-unstyled product_images '>
                <li className='mb-3'> <img src={product.image} alt="" className='img-fluid product-image_size' /></li>
                <li className='mb-3'> <img src={product.image} alt="" className='img-fluid  product-image_size' /></li>
                <li className='mb-3'> <img src={product.image} alt="" className='img-fluid product-image_size' /></li>
                <li className='mb-3'>  <img src={product.image} alt="" className='img-fluid product-image_size' /></li>
               </ul>
              
            </div>
                </div>

                <div className="col-lg-9 col-9">
                <div className="produnct_image">
                <img src={product.image} alt="product_main_image" className='product_main_img img-fluid' />
            </div>
                </div>
            </div>
           
            </div>
            <div className="col-lg-6 product-right">

                <h3 className='product_name'><b>{product.name}</b></h3>
                <div className="product_star">
                 
                 <ul className='d-flex list-unstyled align-items-center'>
                    <li>   <img src={star_icon} alt="" /></li>
                    <li>   <img src={star_icon} alt="" /></li>
                    <li>   <img src={star_icon} alt="" /></li>
                    <li>   <img src={star_icon} alt="" /></li>
                    <li>     <img src={star_dull} alt="" /></li>
                    <li className='ms-2'> <p className='mb-0'>(122)</p></li>
                 </ul>
                   
               
                  
                </div>

                <div className="right_prices d-flex gap-4">
                    <p className='price'>${product.old_price}</p>
                    <p className='price'>${product.new_price}</p>
                </div>

                <div className="description">
                    <p>A lightweight usually knitted, pullover shirt,close-fitting and with a round neckline and short sleeves,worn as an undershirt or outer garment.</p>
                </div>
            <div className="right_size">
               <h6>Select Size</h6>
                 <div className='d-flex Size_chart gap-3'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                 </div>
            </div>

           <div> <button className='add_to_Cart' onClick={handleclick}>Add to Cart</button><span className='icon_color'></span> <span className='success'>{success}</span></div>
            <p className='right_category mb-0'><span>Category: {product.category} </span> </p>
            <p className='right_category mt-0'><span>Name: {product.name} </span> </p>
            
            </div>
        </div>
    </div>
    </section>
  
  </>
  )
}

export default ProDis
