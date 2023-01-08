import React, {useContext} from 'react'
import AppContext from '../context/AppContext'
import logocart from '../asset/icons/bt_add_to_cart.svg';
import styles from '../styles/ProductInfo.module.scss';
import Image from 'next/image';

const ProductInfo = ({product}) => {
    const {state, addToCart,} = useContext(AppContext)
    
    return (
        <>
            <div className={styles["figure-product-image"]}>
                <Image 
                className={styles["img-detail-principal"]}
                src={product.images[0]} 
                alt={product.title}
                width={240}
                height={240}
                priority={true}
                />
                
            </div>

            <div className={styles["ProductInfo-details"]}>
                <p>${product.price}</p>
                <p>{product.title}</p>
                <p>{product.description}</p>
                <button className={styles["primary-button-details"] + " " + styles["add-to-cart-button-details"]}>
                    {/* <Image src={logocart} alt="icono carro de compras"  className={styles.imageCart}/> */}
                    <span>Add to cart</span>
                </button>
            </div>
        </>
    )
}

export default ProductInfo;