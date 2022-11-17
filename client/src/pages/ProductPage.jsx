import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import {GiFullPizza} from 'react-icons/gi';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import styles from '../styles/ProductPage.module.css';
import { increment, addToCart } from "../redux/reducers/cartSlice";
import { useDispatch } from "react-redux";
import image from "../images/margherita_pizza.png";

const ProductPage = () => {

const dispatch = useDispatch();
const location = useLocation();
const product = location.state.data.product;
const [selectedSize, setSelectedSize] = useState({});

const addProduct = () => {

    if (selectedSize.value !== undefined && selectedSize.price !== undefined) {
        const selected = {
            name: product.name,
            size: selectedSize.value,
            price: selectedSize.price
        };
        dispatch(addToCart(selected));
        dispatch(increment());
    }

    else {
        alert("Please select a size")
    }
    
}
console.log(product)
    return (
        <div>
            <Navigation />
        <div className={styles.container}>
            <div className={styles.item}>
            <h1 className={styles.h1}>{product.name}</h1>
            <div className={styles.imgDiv}>
                <img src={image} alt="margherita pizza" className={styles.image} />
            </div>
            <div className={styles.description}>

               <p>
                {product.description} 
                </p>
            </div>
            </div>
            <div className={styles.item}>
                <h2 className={styles.h2}>Sizes</h2>
            <div className={styles.sizeContainer}>
            {product.sizes.map(element => {
                console.log(element)
                        let size = element.size;
                        let price = element.price;
                        if (element.checked) {
                        switch(size) {
                            case 'Small': return <div className={selectedSize.value === size ? styles.selectedSize : styles.sizeItem} onClick={() => setSelectedSize({value: size, price: price})}><span className={styles.size}>${price}</span><GiFullPizza className={styles.smallPizza}/><p>Small</p></div> 
                            case 'Medium': return <div className={selectedSize.value  === size ? styles.selectedSize : styles.sizeItem} onClick={() => setSelectedSize({value: size, price: price})}><span className={styles.size}>${price}</span><GiFullPizza className={styles.mediumPizza}/><p>Medium</p></div>
                            case 'Large':  return <div className={selectedSize.value  === size ? styles.selectedSize : styles.sizeItem} onClick={() => setSelectedSize({value: size, price: price})}><span className={styles.size}>${price}</span><GiFullPizza className={styles.largePizza}/><p>Large</p></div>
                            default: return <div>Size not available</div>
                        }
            }})}
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
            <button className={styles.button} onClick={()=> addProduct()}>
                    <p>Add to Cart</p>
            </button> 
      </div>
        </div>
        </div>
        <Footer />
    </div>
     
    )
}

export default ProductPage;