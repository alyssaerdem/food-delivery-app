import React from "react";
import styles from "../styles/ProductCard.module.css";
import image from "../images/margherita_pizza.png";


const ProductCard = ({product}) => {
    console.log(`${product.image}`)
return (
    <div className={styles.container}>
        <div className={styles.productDiv}>
            <img src={image} alt="margherita pizza" className={styles.productImg}/>
        </div>
        <div className={styles.nameDiv}>
            <h2>{product.name}</h2>
        </div>
    </div>
)};


export default ProductCard;