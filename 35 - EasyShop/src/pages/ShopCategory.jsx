import React, { useContext } from 'react'
import Footer from '../components/Footer/Footer'
import './css/shopcategory.css'
import  {ShopContext} from '../context/Shop_context' 
import Item from '../components/item/Item'
const shopCategory = (props) => {
const {all_products} = useContext(ShopContext)
  return (
    <>
     <section >
       <img src={props.banner} alt="banner" className='img-fluid' />

       <div className="container mt-lg-3">
         <div className="row">
         {all_products.map((item,index)=>{
          if(props.category===item.category){
            return ( <Item key ={index} id ={item.id} img={item.image} name ={item.name} new_price ={item.new_price} old_price={item.old_price}></Item>)
          }else{
            return null;
          }
        })}
         </div>
       </div>
     </section>
    <Footer></Footer>
    </>
  )
}

export default shopCategory
