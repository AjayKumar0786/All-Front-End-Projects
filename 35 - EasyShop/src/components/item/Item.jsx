import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
 
                <div className="col-lg-3 col-6 mt-4 ">
                   <div  className='main_item_box'>
                   <div className="img items_image">
                       <Link to={`/product/${props.id}`}> <img src={props.img} alt="" className='img-fluid'onClick={()=>{window.scrollTo(0,0)}}/></Link>
                    </div>
                    <p className='item_name mb-0'>{props.name}</p>
                    <p className='item_price new_price'>${props.new_price}<span className='ms-4 old_price'>${props.old_price}</span></p>
                  
                   </div>
                </div>
       
  
  )
}

export default Item
