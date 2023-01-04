import React, {useContext} from 'react';
import OrderItem from '../components/OrderItem';
import styles from '../styles/Orders.module.scss';
import AppContext from '../context/AppContext';
import Image from 'next/image';
import Link from 'next/link';
import close from '../asset/icons/icon_close.png';
import ordersimage from "../asset/icons/orders.jpg"


const Orders = () => {
	const {state}= useContext(AppContext)

	const sumTotal = () => {
		const reducer = (accumator, currentValue) => accumator + currentValue.price;
		const sum = state.cart.reduce(reducer,0)
		return sum;
	}

	return (
		<div className={styles.Orders}>
			<div className={styles["Orders-container"]}>
				<h1 className={styles.title}>My orders</h1>
				
				<div className={styles["Orders-content"]}>

				<div className={styles.OrderItem}>
			<figure>
				<Image src={ordersimage} alt="buy items" width={240} height={240} />
			</figure>
			<p>Total</p>
			<p>${sumTotal()}</p>
			
			</div>

				{/* {
				state.cart.map((product)=> {
              console.log(product);
              return(
              <OrderItem product={product} key={product.id} />
              )
            })
          } */}

				</div>
				<Link href="/">
                <button className={styles["primary_button"]} >
                    <span>Buy</span>
                </button>
            </Link>
			</div>
		</div>
	);
}

export default Orders;