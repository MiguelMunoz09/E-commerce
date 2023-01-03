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
		<aside className={styles["shopping-cart-container"]}>
			<div className={styles["title-container-shopping-cart"]}>
				<Image src={arrow} alt="arrow" onClick={() => setToggleOrders(!toggleOrders)}/>
				
				<p className={styles["title-shopping-cart"]}>My order</p>
			</div>
			<div className={styles["articulos-container"]}>
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
					
				))}
				
				<div className={styles["my-order-content"]}>
					<p>
						<span>Total</span>
					</p>
					<p>$ {sumTotal()}</p>
				</div>
				<Link href="/checkout">
                <button disabled={state.cart.length == 0? true:false} className={styles["primary_btn"]} onClick={() => setToggleOrders(!toggleOrders)}>
                    <span>Checkout</span>
                </button>
            </Link>
			</div>
			
		</aside>
	);
}

export default MyOrder;