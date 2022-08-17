import React from 'react';
import PizzaCard from './PizzaCard';
import styles from '../styles/Products.module.css';

const Products = () => {
    return (
        <div className={styles.container}>
            <h1>This is the products page</h1>
            <PizzaCard />
        </div>
    )
}

export default Products;