import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Menu from '../components/Menu';
import MyOrder from '../containers/MyOrder';
import menu from '../asset/icons/icon_menu.svg';
import logo from '../asset/logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext';
import shoppingCart from '../asset/icons/icon_shopping_cart.svg';
import MenuMobile from "../components/MenuMobile"
import styles from '../styles/Header.module.scss';
import Link from "next/link";

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const [toggleMenuMobile, setToggleMenuMobile] = useState(false);

	const { state } = useContext(AppContext);
	

	const handleToggle = () => {
		setToggle(!toggle);
	};

	const handleToggleMenuMobile = () => {
		setToggleMenuMobile(!toggleMenuMobile);
	  };

	return (
		<nav className={styles.nav}>
			<Link href={"/"}>
			<Image src={menu} alt="menu" className={styles.menu}  onClick={() => setToggleMenuMobile(!toggleMenuMobile)} /> 
			</Link>
			 
			<div className={styles["navbar-left"]}>
				<Link href="/">
				<Image src={logo} alt="logo" className={styles["nav-logo"]}  />
				</Link>
				<ul>
					
					<li>
					<Link href="/"> All </Link>
					</li>
					
					<li>
						<Link href="/">
						Clothes
						</Link>
						
					</li>
					<li>
						<Link href="/">
						Electronics
						</Link>
						
					</li>
					<li>
						<Link href="/">
						Furnitures
						</Link>
						
					</li>
					<li>
						<Link href="/">
						Toys
						</Link>
						
					</li>
					<li>
						<Link href=" ">
						Others
						</Link>
						
					</li>
			
				</ul>
			</div>
			<div className={styles["navbar-right"]}>
				<ul>
					<li className={styles["navbar-email"]} onClick={handleToggle} >
						Thewintherdmc@gmail.com
					</li>
					<li
						className={styles["navbar-shopping-cart"]}
						onClick={() => setToggleOrders(!toggleOrders)}
					>
						<Image src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
				
				{toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} />}
			</div>
			{toggle && <Menu  handleToggle={handleToggle}/>}
			{toggleMenuMobile && <MenuMobile handleToggleMenuMobile={handleToggleMenuMobile} />}
		</nav>
	);
}

export default Header;

//aveces los estilos se rompen, porque no organizamos en la posicion que se debe los props