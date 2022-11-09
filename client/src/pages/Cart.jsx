import React from 'react';
import styles from '../styles/Cart.module.css';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {selectProducts, decrement, removeFromCart} from "../redux/reducers/cartSlice";
import {useSelector} from 'react-redux';
import image from "../images/margherita_pizza.png";
import {RiDeleteBinLine} from 'react-icons/ri';
import {useDispatch } from "react-redux";


const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    console.log(products)
   
    const handleRemove = (key) => {
        // console.log(key)
        dispatch(removeFromCart(key)).then(dispatch(decrement()))
    }
    return (
        <div>
            <Navigation />

        <div className={styles.container}>
            <h1>Your cart</h1>
            <div>
                {Object.entries(products).map(([key,val]) => (
                    <div className={styles.product}>
                        <div>
                        <img src={image} className={styles.image} alt="margherita pizza"/>
                        </div>
                        <div className={styles.productInfo}>
                        <div><p>Product</p><span>{val.name}</span></div>
                         <div><p>Size</p><span>{val.size}</span></div>
                         <div><p>Price</p><span>${val.price}</span></div>
                         <div><RiDeleteBinLine className={styles.removeIcon} onClick={() => handleRemove(key)}/></div>
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