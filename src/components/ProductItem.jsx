//este es la card que debe aparecer en el home

//aqui es de donde nos tenemos que basar para mejorar este bug, aqui y en productlist

import React, { useContext, useState } from "react";
import "../styles/ProductItem.scss";
import  AppContext  from "../context/AppContext";
import bt_add_to_cart from "../asset/icons/icons/bt_add_to_cart.svg";
import added_to_cart from "../asset/icons/bt_added_to_cart.svg";
import ProductDetail from "../containers/ProductDetail"

export const ProductItem = ({ product }) => {
  const { addToCart, removeFromCart, state } = useContext(AppContext);
  const [toggleProductDetail, setProductDetail] = useState(false)


  const handleClick = (item) => {
    itsProductAdded() ? removeFromCart(item) : addToCart(item);
  };

  const itsProductAdded = () =>
    state.cart.some((item) => item.id === product.id) ? true : false;

  return (
    <div className="ProductItem">

      <img
      
        src={product.images.length !== 0 ? product.images[0] :empty }
        alt={product.title}
        onClick={() => setProductDetail(!toggleProductDetail)}
        
      />
      
      <div className="product-info">
       
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
          
        </div>
         
        <figure onClick={() => handleClick(product)}>
          
          {itsProductAdded() ? (
            <img src={added_to_cart} alt="" />
          ) : (
            <img src={bt_add_to_cart} alt="" />
          )}
          {toggleProductDetail && <ProductDetail toggleProductDetail = {toggleProductDetail} setProductDetail = {setProductDetail}/>}
        </figure>

      </div>
      
    </div>
  );
};
					
export default ProductItem;



