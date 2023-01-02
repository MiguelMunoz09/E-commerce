import React, { useState, useContext } from 'react';
import Link from "next/link";
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import arrow from '../asset/icons/flechita.svg';
import styles from '../styles/MyOrder.module.scss';
import Image from "next/image";
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
			<div className={styles["title-container"]}>
				<Image src={arrow} alt="arrow" onClick={() => setToggleOrders(!toggleOrders)}/>
				
				<p className={styles.title}>My order</p>
			</div>
			<div className={styles["my-order-content"]}>
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
					
				))}
				
				<div className={styles.order}>
					<p>
						<span>Total</span>
					</p>
					<p>$ {sumTotal()}</p>
				</div>
				<Link className={styles["primary-button"]} href= "/checkout" onClick={() => setToggleOrders(!toggleOrders)}>
					Checkout
				</Link>
			</div>
			
		</aside>
	);
}

export default MyOrder;