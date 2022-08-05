import React from "react";
import styles from "../styles/Navigation.module.css"
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Navigation = () => {
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
                <Link to="/contact" className={styles.link}>Contact</Link>
            </li>
         </ul>
         </div>
        <div className={styles.item}>
            <Link to="/cart" className={styles.link}>
                <FaShoppingCart className={styles.cartIcon}/>
            </Link>
        </div>
    </div>
    )
};

export default Navigation;