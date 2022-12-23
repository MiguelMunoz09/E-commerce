import React, { useState, useContext } from 'react';

import Menu from '../components/Menu';
import MyOrder from '../containers/MyOrder';
import menu from '../asset/icons/icon_menu.svg';
import logo from '../asset/logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext';
import shoppingCart from '../asset/icons/icon_shopping_cart.svg';
import MenuMobile from "../components/MenuMobile"
import styles from '../styles/Header.module.scss';


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
			 <img src={menu} alt="menu" className="menu"  onClick={() => setToggleMenuMobile(!toggleMenuMobile)} /> 
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo"  />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						Thewintherdmc@gmail.com
					</li>
					<li
						className="navbar-shopping-cart"
						onClick={() => setToggleOrders(!toggleOrders)}
					>
						<img src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
				
				{toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} />}
			</div>
			{toggle && <Menu />}
			{toggleMenuMobile && <MenuMobile handleToggleMenuMobile={handleToggleMenuMobile} />}
		</nav>
	);
}

export default Header;

//aveces los estilos se rompen, porque no organizamos en la posicion que se debe los props