
import React, {useContext } from "react";
import addToCartimage from '../asset/icons/bt_add_to_cart.svg';
import AppContext from '../context/AppContext';
import '../styles/ProductInfo.module.scss';


//aqui es donde debemos desarrollar la logica, para que se muestre el mismo contenido en los detalles del producto.
// hay un bug, SOLUCIONAR

const ProductInfo = ( { product } ) => {
	
	//EL CONTENEDOR DE ESTO ES PRODUCT DETAIL

	return (
		
			<>
			
			<img src="https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045__480.jpg" alt=" " />
			
			<div className={["ProductInfo-details"]}>
			<p> $200</p>
			<p>Leon</p>
			<p>this leon, could kill you</p>
			<button className="primary-button-details add-to-cart-button-details">
				<img src={addToCartimage} alt="add to cart" />
				Add to cart
			</button>
		</div></>
	
	);
}

export default ProductInfo;

