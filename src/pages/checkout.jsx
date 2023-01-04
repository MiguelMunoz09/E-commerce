import React, {useContext} from 'react';
import OrderItem from '../components/OrderItem';
import styles from '../styles/Checkout.module.scss';
import Head from "next/head";
import AppContext from '../context/AppContext';
import Link from 'next/link';

const Checkout = () => {
	const {state}= useContext(AppContext)

	const sumTotal = () => {
		const reducer = (accumator, currentValue) => accumator + currentValue.price;
		const sum = state.cart.reduce(reducer,0)
		return sum;
	}

	return (
		<>
		<Head>
			<title>Checkout</title>
		</Head>
		
		<div className={styles.Checkout}>
			<div className={styles["Checkout-container"]}>
				<h1 className={styles.title}>My order</h1>
				<div className={styles["Checkout-content"]}>
					<div className={styles.order}>
						<p>
							<span>3.01.2023</span>
							<span>articles</span>
						</p>
						<p>{sumTotal()}</p>
					</div>
					{
            state.cart.map((product)=> {
              console.log(product);
              return(
              <OrderItem product={product} key={product.id} />
              )
            })
          }
				</div>
				<Link href="/Orders">
                <button className={styles["primary_button"]} >
                    <span>Buy Now</span>
                </button>
            </Link>
			</div>
			
		</div>

		
		</>
		
	);
}

export default Checkout;