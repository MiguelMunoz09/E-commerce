import Link from 'next/link';
import React from 'react';
import styles from '../styles/MenuMobile.module.scss';


const MobileMenu = ({handleToggleMenuMobile}) => {
    return (
        <div className={styles["mobile-menu"]}>
            <ul>
                <li>
                    <p>CATEGORIES</p>
                </li>
                <li>
                    <Link href="/" onClick={handleToggleMenuMobile}>
                     All
                    </Link>
                   
                </li>
                <li>
                    <Link href="/" onClick={handleToggleMenuMobile}>
                    Clothes
                    </Link>
                    
                </li>
                <li>
                    <Link href="/" onClick={handleToggleMenuMobile}>
                    Electronics
                    </Link>
                    
                </li>
                <li>
                    <Link href="/" onClick={handleToggleMenuMobile}>
                    Furnitures
                    </Link>
                </li>
                <li>
                    <Link href="/" onClick={handleToggleMenuMobile}>
                    Toys
                    </Link>
                    
                </li>
                <li>
                    <Link href="" onClick={handleToggleMenuMobile}>
                    Other
                    </Link>
                    
                </li>
                </ul>

                <ul>
                <li>
                    <Link href="/MyAccount" onClick={handleToggleMenuMobile}>
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
                    <Link href="/Login" className={styles["sign-out"]} onClick={handleToggleMenuMobile}>
                     Sign out
                    </Link>
                   
                </li>
            </ul>
        </div>
    );
}

export default MobileMenu;

