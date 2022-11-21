import React from "react";
import ProductCard from "../components/ProductCard";
import styles from "../styles/Products.module.css";
import LoadingIcon from "../components/LoadingIcon";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { fetchProducts } from "../redux/productThunks";
import { useSelector } from "react-redux";
import { selectProducts } from "../redux/reducers/productSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector(selectProducts);
  return (
    <div>
      <Navigation />
      <div className={styles.container}>
        {!products ? (
          <div className={styles.LoadingIconDiv}>
            {" "}
            <LoadingIcon />{" "}
          </div>
        ) : (
          products.map((product) => (
            <div className={styles.item}>
              <Link
                className={styles.link}
                to={`/product/${product.name.replace(/\s+/g, "")}`}
                state={{ data: { product } }}
              >
                <ProductCard product={product} />
              </Link>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
