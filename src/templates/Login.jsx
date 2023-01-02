import React, { Component, useRef } from 'react';
import logo from '../asset/logos/logo_yard_sale.svg'
import styles from '../styles/Login.module.scss';
import Image from 'next/image';
import Link from 'next/link';


const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			usename: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);
	}

	return (
		
		<div className={styles.Login}>
			<div className={styles["Login-container"]}>
				<Image src={logo} alt="logo" className={styles.logo} />
				<form action="/" className={styles.form} href={form}>
					<label htmlFor="email" className={styles.label}>Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className={styles["input styles input-email"]} />
					<label htmlFor="password" className={styles.label}>Password</label>
					<input type="password" name="password" placeholder="*********" className={styles["input input-password"]} />
					<button
						onClick={handleSubmit}
						className={styles["primary-button login-button"]}>
						Log in
					</button>
					<Link href="/">
					<a >Forgot my password</a>
					</Link>
					
				</form>
				<button
					className={styles["secondary-button signup-button"]}
				>
					Sign up
				</button>

			</div>
		</div >
			
	);
}

export default Login;