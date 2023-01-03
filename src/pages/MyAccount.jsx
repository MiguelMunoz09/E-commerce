import React from 'react';
import Yardsale from '../asset/logos/logo_yard_sale.svg';
import styles from '../styles/Myaccount.module.scss';
import Image from "next/image";
import Link from 'next/link';


const MyAccount = () => {
	return (

		<div className={styles["login-MyAccount"]}>
        <div className={styles["form-MyAccount"]}>
          <Image src={Yardsale} alt="logo" className={styles["logo-MyAccount"]}/>
          
          <h1 className={styles["title-MyAccount"]}> My account </h1>  

          <form action="/" className={styles["form-MyAccount"]}>
            <label for="email" className={styles["label-MyAccount"]}>Name</label>
            <p className={styles["value-Myaccount"]}> Miguel angel Muñoz </p>

            <label for="password" className={styles["label-MyAccount"]}>Email adress</label>
            <p className={styles["value-Myaccount"]}> Thewintherdmc@gmail.com</p>

            <label for="password" className={styles["label-MyAccount"]}>Password</label>
            <p className={styles["value-Myaccount"]}>*********</p>
          
            <input type="submit" value="Edit" className={styles["secondary-button-MyAccount"] + " " + styles["login-button-MyAccount"]}/>
           
          </form>
    
          
        </div>
      </div>
	);
}

export default MyAccount;