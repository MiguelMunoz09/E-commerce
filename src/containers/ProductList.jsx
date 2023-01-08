import React , {useState} from 'react';
import ProductItem from '../components/ProductItem';
import ProductDetail from './ProductDetail';
import useGetProducts from '../hooks/useGetProducts';
import styles from '../styles/ProductList.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products?limit=50&offset=12'; //Por el momento recibimos la API de esta forma (NO ADECUADA)

const ProductList = () => {
    
    const products =  useGetProducts(API);//guardamos los productos de la API
    const [detailToggle, setDetailToggle] = useState(false);//Creamos la variable detailToggle para abrir el modal de ProductDatail
    
    return (
        <section className={styles["main-container"]}>
            <div className={styles["cards-container"]}>
                {products.map(product =>{ //Se mapea todos los productos uno a uno y por cada uno se crea un componente de Product Item
                    return (
                        <ProductItem 
                            product={product} // envía el objeto del producto en especifico
                            key={product.id}  //envía el id del producto en especifico
                        />
                        )
                    }
                )}  
            </div>
            {
            detailToggle && <ProductDetail /> 
            }
        </section>
    )
};

export default ProductList;