import React, {useState, useContext} from 'react';
import ProductInfo from '../components/ProductInfo';
import AppContext from '../context/AppContext';
import '../styles/ProductDetail.module.scss';
import back from "../asset/icons/icon_close.png";

//va dentro de handle bars 

const ProductDetail = ({toggleProductDetail, setProductDetail}) => {
	const { state } = useContext(AppContext);

	return (
		<aside className={styles.ProductDetail}>
			<div className={styles["ProductDetail-close"]} onClick={() => setProductDetail(!toggleProductDetail)}>
			{/* {state.cart.map(product => (
					<ProductInfo product={product} key={`orderItem-${product.id}`} />
					
				))} */}


			</div>
			<ProductInfo/>
			
				
			 
		</aside>
	);
}

export default ProductDetail;