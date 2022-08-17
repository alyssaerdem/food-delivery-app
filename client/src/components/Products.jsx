import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/Products.module.css';

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("/api/products")
          .then((res) => res.json())
          .then((data) => {setProducts(data.data)});
      }, []);

    return (
        <div className={styles.container}>
            <div className={styles.productsContainer}>
              {/* <h1>Products</h1> */}
                {products.map(product => (
                        <ProductCard product = {product}/>
                    )
                )}
            </div>
        </div>
    )
}

export default Products;