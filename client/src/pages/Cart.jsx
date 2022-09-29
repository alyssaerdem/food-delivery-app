import React from 'react';
import styles from '../styles/Cart.module.css';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {selectProducts, increment, decrement} from "../redux/reducers/cartSlice";
import {useSelector} from 'react-redux';
import image from "../images/margherita_pizza.png";



const Cart = () => {
    const products = useSelector(selectProducts);
    console.log(products)
    return (
        <div>
            <Navigation />

        <div className={styles.container}>
            <h1>Your cart</h1>
            <div>
                {products.map(element => (
                    <div className={styles.product}>
                        <div>
                        <img src={image} className={styles.image} alt="margherita pizza"/>
                        </div>
                        <div>
                        {element.name}
                         Size: {element.size}
                         Price: {element.price}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Cart;