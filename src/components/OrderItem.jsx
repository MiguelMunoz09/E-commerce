import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import close from '../asset/icons/icon_close.png';
import styles from '../styles/OrderItem.module.scss';
import Image from "next/image";

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product);
	}

	return (
		<div className={styles.OrderItem}>
			<figure>
				<Image src={product?.images[0]} alt={product?.title} width={240} height={240}/>
			</figure>
			<p>{product?.title}</p>
			<p>${product?.price}</p>
			<Image src={close} alt="close"  className={styles.closeimage} onClick={() => handleRemove(product)} />
		</div>
	);
}

export default OrderItem;