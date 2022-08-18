import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/Products.module.css';
import LoadingIcon from './LoadingIcon';
import {Link} from 'react-router-dom';


const Products = () => {

    const [products, setProducts] = useState(null);
    useEffect(() => {
        fetch("/api/products")
          .then((res) => res.json())
          .then((data) => {setProducts(data.data)});
      }, []);

    return (
        <div className={styles.container}>
             {!products ? <LoadingIcon />:
                products.map(product => (

                    <Link
                        className={styles.link}
                        to={`/product/${product.name}`}
                        state={{data:{product}}}
                    >
                    <ProductCard product = {product}/>
                    </Link>
                )
            )}
        </div>
    )
}

export default Products;