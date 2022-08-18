import React from "react";
import { useLocation } from "react-router-dom";
import styles from '../styles/ProductPage.module.css';
import PizzaImage from "../margherita_pizza.png";

const ProductPage = () => {
const location = useLocation();
const product = location.state.data.product;

console.log(product.name)
    return (
        <div className={styles.container}>
            <div className={styles.productInfo}>
            <div className={styles.item}>
            <h1 className={styles.nameH1}>{product.name}</h1>
            <div className={styles.imgDiv}>
                <img src={PizzaImage} alt="margherita pizza" className={styles.productImg}/>
            </div>
            <div className={styles.description}>
               <h3>Ingredients</h3>
               <p className={styles.descriptionText}>
                {product.description} 
                </p>
            </div>
            </div>
            <div className={styles.item}>
            <div className={styles.sizeContainer}>
            <h2 className={styles.sizeH2}>Sizes</h2>
            </div>
            </div>
            </div>
        </div>
    )
}

export default ProductPage;