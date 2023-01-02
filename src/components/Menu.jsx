import Link from 'next/link';
import React from 'react';
import styles from '../styles/Menu.module.scss';

const Menu = ({handleToggle}) => {
	return (
		<div className={styles.Menu}>
			<ul>
				<li>
					<Link href="/Orders" className={styles.title} onClick={handleToggle}>
					  My orders
					</Link>
					
				</li>
				<li>
					<Link href=" /MyAccount" onClick={handleToggle}>
					My account
					</Link>
					
				</li>
				<li>
					<Link href="/Login" onClick={handleToggle}>
					Sign out
					</Link>
					
				</li>
			</ul>
		</div>
	);
}

export default Menu;