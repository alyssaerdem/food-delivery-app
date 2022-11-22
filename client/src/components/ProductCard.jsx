import React from "react";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.productDiv}>
        <img
          src={`http://localhost:3001/${product.image.replace("public/", "")}`}
          alt={product.name}
          className={styles.productImg}
        />
      </div>
      <div className={styles.nameDiv}>
        <h2>{product.name}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
