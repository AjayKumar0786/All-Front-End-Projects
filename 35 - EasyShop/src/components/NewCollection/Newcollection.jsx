import React from 'react'
import './New.css';
import new_collections from '../../../public/Assets/new_collections'
import Item from '../item/Item';

const Newcollection = () => {
  return (
   <>
   <section>
 <div className="container new_collections_Container">
    <div className="row">
        <h1 className='text-center collection_text'>New collection</h1>
        {new_collections.map((item,index)=>{
            return( <Item key ={index} id ={item.id} img={item.image} name ={item.name} new_price ={item.new_price} old_price={item.old_price}></Item>)
        })}
    </div>
 </div>
   </section>
   </>
  )
}

export default Newcollection
