import React from 'react'
import data_product from '../../../public/Assets/data'
import Item from '../item/Item'
import './Related.css';
const Related = () => {
  return (
    <section className='Related_product'>
        <div className="container">
            <div className="row text-center">
              <h3 className='Relatedproduct'>Related Product</h3>
              {data_product.map((item,index)=>{
                return(<Item key ={index} id ={item.id} img={item.image} name ={item.name} new_price ={item.new_price} old_price={item.old_price}></Item>)
              })}
            </div>
        </div>
    </section>
  )
}

export default Related
