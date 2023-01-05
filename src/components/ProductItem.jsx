//este es la card que debe aparecer en el home

//aqui es de donde nos tenemos que basar para mejorar este bug, aqui y en productlist

import React, { useContext, useState } from "react";
import Image from "next/image";
import AppContext  from "../context/AppContext";
import bt_add_to_cart from "../asset/icons/bt_add_to_cart.svg";
import added_to_cart from "../asset/icons/bt_added_to_cart.svg";
import ProductDetail from "../containers/ProductDetail"
import styles from "../styles/ProductItem.module.scss";


export const ProductItem = ({ product }) => {
  const { addToCart, removeFromCart, state } = useContext(AppContext);
  const [toggleProductDetail, setProductDetail] = useState(false)


  const handleClick = (item) => {
    itsProductAdded() ? removeFromCart(item) : addToCart(item);
  };

  const itsProductAdded = () =>
    state.cart.some((item) => item.id === product.id) ? true : false;

  return (
    <div className={styles.ProductItem}>

   <Image
        loader={() => product.images[0]}
        src={product.images[0]}
        alt={product.title}
        width={100}
        height={100}
        onClick={() => setProductDetail(!toggleProductDetail)}
        className={styles.ItemImages}
      />
   
      <div className={styles["product-info"]}>
       
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
          
        </div>
         
        <figure onClick={() => handleClick(product)} className={styles.figureimg}>
          
          {itsProductAdded() ? (
            <Image src={added_to_cart} alt="" width={250} height={250} className={styles.imgItem}/>
          ) : (
            <Image src={bt_add_to_cart} alt="" width={250} height={250} className={styles.imgItem}/>
          )}
          {toggleProductDetail && <ProductDetail toggleProductDetail = {toggleProductDetail} setProductDetail = {setProductDetail} product={product} key={product.id}/>}
        </figure>

      </div>
      
    </div>
  );
};
					
export default ProductItem;



