import React from "react";
import PizzaImage from "../margherita_pizza.png";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({product}) => {
    console.log(product)
return (
    <div className={styles.container}>
        <div className={styles.productDiv}>
            <img src={PizzaImage} alt="margherita pizza" className={styles.productImg}/>
        </div>
        <div className={styles.nameDiv}>
            <h2>{product.name}</h2>
        </div>
       {/* <div className={styles.buttonDiv}>
            <button>View</button>
</div> */}
    </div>
)};


export default ProductCard;