import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import close from '../asset/icons/icon_close.png';
import styles from '../styles/MyOrder.module.scss';
import Image from "next/image";

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product);
	}

	return (
		<div className={styles["shopping-cart"]}>
			<figure>
				<Image src={product?.images[0]} alt={product?.title} width={100} height={100} className={styles["shopping-image"]} />
			</figure>
			<p>{product?.title}</p>
			<p>${product?.price}</p>
			<Image src={close} alt="close"  className={styles['close-x']} onClick={() => handleRemove(product)} />
		</div>
	);
}

export default OrderItem;