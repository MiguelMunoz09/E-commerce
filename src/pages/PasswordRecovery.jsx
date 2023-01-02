import React from 'react';
import styles from '../styles/PasswordRecovery.module.scss';
import Image from 'next/image';
import LogoSale from "../asset/logos/logo_yard_sale.svg"
import Link from 'next/link';


const PasswordRecovery = () => {
	return (
		<div className={styles.PasswordRecovery}>
			<div className={styles["PasswordRecovery-container"]}>
				<Image src={LogoSale} alt="logo" className={styles.logo} />
				<h1 className={styles["title-Recovery"]}>Password recovery</h1>
				<p className={styles.subtitle}>Use the email address used to create your account</p>
				<form  className={styles.form}>
					<label htmlFor="email" className={styles.label}>Email address</label>
					<input type="text" id="email" className={styles["input"] + " " + styles["input-email"]} />
					<Link href={"/SendEmail"}>
					<input type="submit" value="Confirm" className={styles["primary-button"] + " " + styles["login-button"]} />
					</Link>
					
				</form>
			</div>
		</div>
	);
}

export default PasswordRecovery;