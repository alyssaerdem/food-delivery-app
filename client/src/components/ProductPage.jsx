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
            <div className={styles.item}>
            <h1 className={styles.h1}>{product.name}</h1>
            <div className={styles.imgDiv}>
                <img src={PizzaImage} alt="margherita pizza" className={styles.image}/>
            </div>
            <div className={styles.description}>

               <p className={styles.descriptionText}>
                {product.description} 
                </p>
            </div>
            </div>
            <div className={styles.item}>
                <div className={styles.h2}><h2>Sizes</h2></div>
            <div className={styles.sizeContainer}>
            {product.sizes.map(element => {
                console.log(element)
                        let size = element.size;
                        let price = element.price;
                        switch(size) {
                            case 'Small':  return <div className={selectedSize === size ? styles.selectedSize : styles.sizeItem} onClick={() => setSelectedSize(size)}><span className={styles.size}>${price}</span><GiFullPizza className={styles.smallPizza}/><p>{size}</p></div>
                            case 'Medium': return <div className={selectedSize === size ? styles.selectedSize : styles.sizeItem} onClick={() => setSelectedSize(size)}><span className={styles.size}>${price}</span><GiFullPizza className={styles.mediumPizza}/><p>{size}</p></div>
                            case 'Large':  return <div className={selectedSize === size ? styles.selectedSize : styles.sizeItem} onClick={() => setSelectedSize(size)}><span className={styles.size}>${price}</span><GiFullPizza className={styles.largePizza}/><p>{size}</p></div>
                            default: return <div>Size not available</div>
                        }
            })}
            </div>
            <div className={styles.quantityContainer}>
                <form>
                <label className={styles.label}>
                    Quantity: 1
                  {/*  <button className={styles.inputBtn}>-</button>
                    <p>{quantity}</p>
                    <button className={styles.inputBtn}>+</button>*/}
        </label>    
            </form>  
            <button className={styles.button}>
                    <p>Add to Cart</p>
            </button> 
      </div>
        </div>
        </div>
     
    )
}

export default ProductPage;