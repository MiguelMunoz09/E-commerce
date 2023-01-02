import React from 'react';
import LogoYard from "../asset/logos/logo_yard_sale.svg"
import Image from "next/image";
import styles from '../styles/NewPassword.module.scss';


const NewPassword = () => {
	return (
		<div className={styles.NewPassword}>
			<div className={styles["NewPassword-container"]}>
				<Image src={LogoYard} alt="logo" className={styles.logo} />
				<h1 className={styles["title-NewPassword"]}>Create a new password</h1>
				<p className={styles.subtitle}>Enter a new password for your account</p>
				<form action="/" className={styles.form}>
					<label for="password" className={styles.label}>Current Password</label>
					<input type="password" id="password" placeholder="*********" className={styles["input input-password"]} />
					<label for="new-password" className={styles.label}>New Password</label>
					<input type="password" id="new-password" placeholder="*********" className={styles["input input-password"]} />
					<input type="submit" value="Confirm" className={styles["primary-button login-button"]} />
				</form>
			</div>
		</div>
	);
}

export default NewPassword;