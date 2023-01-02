import Link from 'next/link';
import React from 'react';
import styles from '../styles/MenuMobile.module.scss';


const MobileMenu = () => {
    return (
        <div className={styles["mobile-menu"]}>
            <ul>
                <li>
                    <p>CATEGORIES</p>
                </li>
                <li>
                    <Link href="/">
                     All
                    </Link>
                   
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
                    <Link href="">
                    Other
                    </Link>
                    
                </li>
                </ul>

                <ul>
                <li>
                    <Link href="/MyAccount">
                    My account
                    </Link>
                    
                </li>
                </ul>

                <ul>
                <li>
                    <Link href="/" className={styles.email}>
                     thewintherdmc@gmail.com
                    </Link>
                    
                </li>
                <li>
                    <Link href="/Login" className={styles["sign-out"]}>
                     Sign out
                    </Link>
                   
                </li>
            </ul>
        </div>
    );
}

export default MobileMenu;

