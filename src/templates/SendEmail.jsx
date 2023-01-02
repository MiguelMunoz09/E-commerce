import React from 'react';
import LogoEmail from "../asset/icons/email.svg";
import yarsalelogo from "../asset/logos/logo_yard_sale.svg";
import styles from '../styles/SendEmail.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const SendEmail = () => {
	return (
		<div className={styles.SendEmail}>
			<div className={styles["form-container"]}>
				<Image src={yarsalelogo} alt="logo" className={styles["logo-email"]} />
				<h1 className={styles.title}>Email has been sent!</h1>
				<p className={styles.subtitle}>Please check your inbox for instructions on how to reset the password</p>
				<div className={styles["email-image"]}>
					<Image src={LogoEmail} alt="email" />
				</div>
				<button className={styles["primary-button login-button"]}>Login</button>
				<p className={styles.resend}>
					<span>Do not receive the email?</span>
					<Link href="/">
					<a>Resend</a>
					</Link>
					
				</p>
			</div>
		</div>
	);
}

export default SendEmail;