import React from 'react';
import styles from '../styles/Cart.module.css';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";


function Cart() {
    return (
        <div>
            <Navigation />

        <div className={styles.container}>
            <h1>This is the cart page</h1>
        </div>
        <Footer />
        </div>
    )
}

export default Cart;