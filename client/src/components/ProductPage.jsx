import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import styles from '../styles/ProductPage.module.css';
import PizzaImage from "../margherita_pizza.png";
import {GiFullPizza} from 'react-icons/gi';

const ProductPage = () => {
const location = useLocation();
const product = location.state.data.product;
const [selectedSize, setSelectedSize] = useState("");
console.log(product)
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
                <div className={styles.sizeH2}><h2>Sizes</h2></div>
            <div className={styles.sizeContainer}>
            {product.sizes.map(element => {
                console.log(element)
                        let size = element.size;
                        let price = element.price;
                        switch(size) {
                            case 'Small':  return <div className={selectedSize === size ? styles.selectedSize : styles.sizeItem} onClick={() => setSelectedSize(size)}><span className={styles.size}>${price}</span> <GiFullPizza className={styles.smallPizza}/>{size}</div>
                            case 'Medium': return <div className={selectedSize === size ? styles.selectedSize : styles.sizeItem} onClick={() => setSelectedSize(size)}><span className={styles.size}>${price}</span><GiFullPizza className={styles.mediumPizza}/>{size}</div>
                            case 'Large':  return <div className={selectedSize === size ? styles.selectedSize : styles.sizeItem} onClick={() => setSelectedSize(size)}><span className={styles.size}>${price}</span><GiFullPizza className={styles.largePizza}/>{size}</div>
                            default: return <div>Size not available</div>
                        }
            })}
            </div>
            </div>
            </div>
        </div>
    )
}

export default ProductPage;