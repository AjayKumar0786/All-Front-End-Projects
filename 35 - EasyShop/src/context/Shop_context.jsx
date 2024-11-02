import {createContext,useState} from "react";
import all_products from '../../public/Assets/all_product'

export const ShopContext = createContext(null);
const getDefaultCart=()=>{
    let cart = {};
    for(let i=0;i<all_products.length+1;i++){
        cart[i]=0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{
    const [Cartitem,SetCartitems] = useState(getDefaultCart());

    const[success,SetSuccess] = useState("");

    const addTocart = (itemId)=>{
        SetCartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        SetSuccess("👍 Added to cart");
        setTimeout(() => {
            SetSuccess("");
        }, 3000);

    // Set a timeout to remove the success message after 3 seconds (adjust as needed)
 
       
    }
    const removefromcart = (itemId)=>{
        SetCartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmmount =()=>{
        let totalAmout =0;
        for(const item in Cartitem){
             if(Cartitem[item]>0){
                let iteminfo = all_products.find((product)=>product.id===Number(item));
                totalAmout += iteminfo.new_price * Cartitem[item];
             }
             
        }
        return totalAmout;
    }

    const getTotalcartitems = ()=>{
        let totalitem=0;
        for(const items in Cartitem){
        
            if(Cartitem[items]>0){
              
                totalitem += Cartitem[items];
            }
        }
        return totalitem;
    }
    const Contextvalue ={getTotalcartitems,all_products,Cartitem,addTocart,removefromcart,getTotalCartAmmount,success};
    return(
        <ShopContext.Provider value = {Contextvalue}>
             {props.children}
            </ShopContext.Provider>
    )
}
export default ShopContextProvider