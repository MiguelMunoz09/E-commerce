import React from 'react';
import styles from '../styles/CreateAccount.module.scss'
import Head  from 'next/head';
import Link from 'next/link';


const CreateAccount = () => {
	return (
		<>
		<Head>
			<title>Create Account</title>
		</Head>
		<div className={styles.CreateAccount}>
			<div className={styles["CreateAccount-container"]}>
				<h1 className={styles.title}>Sign Out</h1>
				<form action="/" className={styles.form}>
					<div>
						<label for="name" className={styles.label}>Name</label>
						<input type="text" id="name" placeholder="Miguel Angel Munoz" className={styles["input"] + " " + styles["input-name"]} />
						<label for="email" className="label">Email</label>
						<input type="text" id="email" placeholder="Thewintherdmc@gmail.com" className={styles["input"] + " "+ styles["input-email"]} />
						<label for="password" className={styles.label}>Password</label>
						<input type="password" id="password" placeholder="*********" className={styles["input"] + " " + styles["input-password"]} />
					</div>
					<Link href={"/Login"}>
					<input type="submit" value="Create" className={styles["primary-button"] + " " + styles["login-button"]} />
					</Link>
					
				</form>
			</div>
		</div>
		</>
		
	);
}

export default CreateAccount;