import React, { Component, useRef } from 'react';
import logo from '../asset/logos/logo_yard_sale.svg'
import styles from '../styles/Login.module.scss';
import Image from 'next/image';
import Link from 'next/link';


const Login = () => {
// 	const form = useRef(null);

// 	const handleSubmit = (event) => {
// 		event.preventDefault();
// 		const formData = new FormData(form.current);
// 		const data = {
// 			usename: formData.get('email'),
// 			password: formData.get('password')
// 		}
// 		console.log(data);
// 	}

	return (
		
		<div className={styles.Login}>
			<div className={styles["Login-container"]}>
				<Image src={logo} alt="logo" className={styles.logo} />
				<form  className={styles.form}>
					<label htmlFor="email" className={styles.label}>Email address</label>
					<input type="text" name="email" placeholder="Thewintherdmc@gmail.com" className={styles["input"] + " " + styles["input-email"]} />
					<label htmlFor="password" className={styles.label}>Password</label>
					<input type="password" name="password" placeholder="*********" className={styles["input"] + " " + styles["input-password"]} />
					<button
						
						className={styles["primary-button"] + " " + styles["login-button"]}>
							<Link href={"/"}>
								Log in
							</Link>
					</button>
					<Link href="/PasswordRecovery">
					Forgot my password
					</Link>
					
				</form>
				<button
					className={styles["secondary-button"] + " " + styles["signup-button"]}
				>
					<Link href={"/CreateAccount"}>
					Sign up
					</Link>
					
				</button>

			</div>
		</div >
			
	);
}

export default Login;