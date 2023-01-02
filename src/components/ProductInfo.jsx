import React, {useContext} from 'react'
import AppContext from '../context/AppContext'
import logocart from '../asset/icons/bt_add_to_cart.svg';
import styles from '../styles/ProductInfo.module.scss';
import Image from 'next/image';

const ProductInfo = ({product}) => {
    const {state, addToCart,} = useContext(AppContext)
    
    return (
        <>
            <figure className={styles["image-container"]}>
                <Image 
                className={styles["img-detail-principal"]}
                src={product.images[0]} 
                alt={product.title}
                width={400}
                height={400}
                priority={true}
                />
            </figure>

            <div className={styles["ProductInfo-details"]}>
                <p>${product.price}</p>
                <p>{product.title}</p>
                <p>{product.description}</p>
                <button onClick={()=>addToCart(pro)} className={styles["primary-button-details"] + " " + styles["add-to-cart-button-details"]}>
                    <Image src={logocart} alt="icono carro de compras" />
                    <span>Add to cart</span>
                </button>
            </div>
        </>
    )
}

export default ProductInfo;