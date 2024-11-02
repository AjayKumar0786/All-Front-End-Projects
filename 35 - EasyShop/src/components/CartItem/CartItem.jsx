import { useContext, useState } from "react";
import React from "react";
import { ShopContext } from "../../context/Shop_context";
import product from "../../pages/Product";
import "./CartItem.css";
const CartItem = () => {
  const { all_products, Cartitem, removefromcart, getTotalCartAmmount } =
    useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr  className="m-0 noone_line"/>

      {all_products.map((items, index) => {
        if (Cartitem[items.id] > 0) {
          return (
            <div>
              <div className="cartitems-format ">
           
            
            <div className="main">
            <div className="product">
              <p className="none">Product</p>
              <p>    <img
                  src={items.image}
                  alt=""
                  className="carticon-product-icon img-fluid"
                /></p>
          
             </div>
            <hr />
               <div className="title">
                <p className="none ms-4 ps-2">Title</p>
               <p className="item_name">{items.name}</p>
               </div>
                  <hr />
                <div className="price">
                  <p className="none">Price</p>
                <p className="item_name">$ {items.new_price}</p>
                </div>
                <hr />
                <div className="Quantity">
                  <p className="none">Quantity</p>
                <button className="cartitems-quantity">
                  {Cartitem[items.id]}
                </button>
                </div>
                <hr />
              <div className="total">
                <p className="none">Total</p>
              <p className="item_name">{items.new_price * Cartitem[items.id]}</p>
              </div>
              <hr />

               <div className="Remove">
                <p className="none">Remove</p>
                <p>  <img
                  src="./Assets/cart_cross_icon.png"
                  alt=""
                  className="Remove_icon img-fluid"
                  onClick={() => {
                    removefromcart(items.id);
                  }}
                  
                /></p>
               </div>

            </div>
              
              </div>
              <hr className="m-0"/>
            </div>
          );
        }
        return null;
      })}
      <div className="row ">
        <div className="col-lg-6">
          <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
              <div className="cartitems-total-item">
                <p className="mb-0">Subtotal</p>
                <p className="mb-0">${getTotalCartAmmount()}</p>
              </div>
              <hr className="m-0" />
              <div className="cartitems-total-item">
                <p className="mb-0" >Shipping Fee</p>
                <p className="mb-0" >Free</p>
              </div>

              <hr className="m-0"/>

              <div className="cartitems-total-item">
                <h3><b>total</b></h3>
                <h3><b>${getTotalCartAmmount()}</b></h3>
              </div>
            </div>
           <div className="btn_proceed">
           <button className="proceed_btn">PROCEED TO CHECKOUT </button>
           </div>
          </div>
        </div>

        <div className="col-lg-6 mt-lg-5">
          <div className="cartitem-promocode ">
            <p>if you have a promo code,Enter it here</p>
            <div className="cartitem-promobox d-flex">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
