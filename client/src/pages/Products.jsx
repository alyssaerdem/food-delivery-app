import React, {useState, useEffect} from 'react';
import ProductCard from '../components/ProductCard';
import styles from '../styles/Products.module.css';
import LoadingIcon from '../components/LoadingIcon';
import {Link} from 'react-router-dom';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import axios from 'axios';



const Products = () => {

    const [products, setProducts] = useState(null);
    useEffect(() => {
        axios.get("/api/products")
          .then((response) => setProducts(response.data.data))
      }, []);

    return (
        <div>
            <Navigation />
        <div className={styles.container}>
             {!products ? <div className={styles.LoadingIconDiv}> <LoadingIcon /> </div>:
                products.map(product => (
                    <div className={styles.item}>
                    <Link
                        className={styles.link}
                        to={`/product/${product.name.replace(/\s+/g, '')}`}
                        state={{data:{product}}}
                    >
                    <ProductCard product = {product}/>
                    </Link>
                    </div>
                )
            )}
        </div>
        <Footer />
        </div>
    )
}

export default Products;