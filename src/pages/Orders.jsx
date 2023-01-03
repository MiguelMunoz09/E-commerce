import React, {useContext} from 'react';
import OrderItem from '../components/OrderItem';
import styles from '../styles/Orders.module.scss';
import AppContext from '../context/AppContext';

const Orders = () => {
	const {state}= useContext(AppContext)

	return (
		<div className={styles.Orders}>
			<div className={styles["Orders-container"]}>
				<h1 className={styles.title}>My orders</h1>
				
				<div className={styles["Orders-content"]}>
				{
				state.cart.map((product)=> {
              console.log(product);
              return(
              <OrderItem product={product} key={product.id} />
              )
            })
          }
				</div>
			</div>
		</div>
	);
}

export default Orders;