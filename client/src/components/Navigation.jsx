import React from "react";
import styles from "../styles/Navigation.module.css"
import { FaShoppingCart } from 'react-icons/fa';

import { Link } from "react-router-dom";

const Navigation = () => {

    const scrollDown = () => {
        console.log("here")
        window.scroll({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    };

    return (
    <div className={styles.container}>
        <div className={styles.item}>
            Logo
        </div>
        <div className={styles.item}>
         <ul className={styles.list}>
            <li className={styles.listItem}>
                <Link to="/" className={styles.link}>Home</Link>
            </li>
            <li className={styles.listItem}>
                <Link to="/products" className={styles.link}>Products</Link>
            </li>
            <li className={styles.listItem}>
                <p className={styles.link} onClick={()=> scrollDown()}>About</p>
            </li>
         </ul>
         </div>
        <div className={styles.item}>
            <div className={styles.cart}>
            <Link to="/cart" className={styles.link}>
                <FaShoppingCart className={styles.cartIcon}/>
                <div className={styles.counter}>1</div>
            </Link>
            {/*} <Link to="/login" className={styles.link}>
                <FaUserCircle className={styles.userIcon}/>
    </Link> */}
    </div>
        </div>
    </div>
    )
};

export default Navigation;