import React from 'react'
import data_product from '../../../public/Assets/data'
import Item from '../item/Item'
import './popular.css';
const Popo = () => {
  return (
   <section>
    <div className="container popular_container">
        <div className="row ">
            
                <h1 className='text-center mt-4 pb-4 popular_text'>POPULAR IN WOMEN</h1>
                {data_product.map((item,index)=>{
                    return(
                        <Item key ={index} id ={item.id} img={item.image} name ={item.name} new_price ={item.new_price} old_price={item.old_price}></Item>
                    )
                })}
           
        </div>
    </div>
   </section>
  )
}

export default Popo
