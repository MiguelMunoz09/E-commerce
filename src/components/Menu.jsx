import React from 'react';
import styles from '../styles/Menu.module.scss';

const Menu = () => {
	return (
		<div className={styles.Menu}>
			<ul>
				<li>
					<a href="" className="title">My orders</a>
				</li>
				<li>
					<a href="http://localhost:443/account">My account</a>
				</li>
				<li>
					<a href="/"> Sign out</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;