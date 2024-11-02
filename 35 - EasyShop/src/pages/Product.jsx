import React, { useContext } from 'react'
import  {ShopContext} from '../context/Shop_context' 
import { useParams } from 'react-router-dom';
import Bread from '../components/Breadcrumps/Bread';
import Footer from '../components/Footer/Footer';
import ProDis from '../components/ProductDisplay/ProDis';
import Description from '../components/Description/Description';
import Related from '../components/Related_product/Related';
const product = () => {
const {all_products} = useContext(ShopContext);
// using this product id we will find the product from all product list
const {ProductId} = useParams();
const product = all_products.find((e)=>e.id===Number(ProductId));
  return (
    <>
    <div>
      <Bread product={product}></Bread>
      <ProDis product ={product}></ProDis>
      <Description></Description>
      <Related></Related>
      
    </div>
    <Footer></Footer>
    </>
  )
}

export default product
