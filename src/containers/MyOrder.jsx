import React, { useState, useContext } from 'react';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import arrow from '../asset/icons/flechita.svg';
import ProductInfo  from '../components/ProductInfo';
import styles from '../styles/MyOrder.module.scss';
//pasar como parametro toggleOrders, setToggleOrders es lo que nos permite importar la funcion del header.

const MyOrder = ({toggleOrders, setToggleOrders}) => {
	const { state } = useContext(AppContext);
	

	const sumTotal = () => {
		const reducer = (accumator, currentValue) => accumator + currentValue.price;
		const sum = state.cart.reduce(reducer,0)
		return sum;
	}

		
		
		
	
	return (
		<aside className={styles.MyOrder}>
			<div className="title-container">
				<img src={arrow} alt="arrow" onClick={() => setToggleOrders(!toggleOrders)}/>
				
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
					
				))}
				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>$ {sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
			
		</aside>
	);
}

export default MyOrder;