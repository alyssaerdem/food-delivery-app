import React, { useState } from "react";
import styles from "../styles/Cart.module.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  selectProducts,
  decrement,
  removeFromCart,
} from "../redux/reducers/cartSlice";
import { useSelector } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");

  console.log(products);

  const handleTotal = () => {
    let totalPrice = 0;
    Object.entries(products).forEach(([key, val]) => {
      console.log(val);
      totalPrice += val.price;
    });
    console.log(totalPrice);
    return totalPrice;
  };

  const handleRemove = (key) => {
    try {
      dispatch(removeFromCart(key)).then(dispatch(decrement()));
      handleTotal();
    } catch (e) {}
  };

  const handleCheckout = () => {};

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  let total = handleTotal();

  return (
    <div>
      <Navigation />

      <div className={styles.container}>
        <div>
          <h1>Your cart</h1>
          {!isEmpty(products) ? (
            Object.entries(products).map(([key, val]) => (
              <div className={styles.product}>
                <div>
                  <img
                    src={`http://localhost:3001/${val.image.replace(
                      "public/",
                      ""
                    )}`}
                    className={styles.image}
                    alt={val.name}
                  />
                </div>
                <div className={styles.productInfo}>
                  <div>
                    <p>Product</p>
                    <span>{val.name}</span>
                  </div>
                  <div>
                    <p>Size</p>
                    <span>{val.size}</span>
                  </div>
                  <div>
                    <p>Price</p>
                    <span>${val.price}</span>
                  </div>
                  <div>
                    <RiDeleteBinLine
                      className={styles.removeIcon}
                      onClick={() => handleRemove(key)}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.product}>Your cart is empty...</div>
          )}
        </div>
        <div className={styles.checkoutDiv}>
          <h1>Total: ${total}</h1>
          <div>
            <p className={styles.inputP}>First name</p>
            <input
              onInput={(e) => setFirstName(e.target.value)}
              value={firstName}
              placeholder="First name..."
            ></input>
          </div>
          <div>
            <p className={styles.inputP}>Last name</p>
            <input
              onInput={(e) => setLastName(e.target.value)}
              value={lastName}
              placeholder="Last name..."
            ></input>
          </div>
          <div>
            <p className={styles.inputP}>Address</p>
            <input
              className={styles.address}
              onInput={(e) => setAddress(e.target.value)}
              value={address}
              placeholder="Address..."
            ></input>
          </div>
          <div className={styles.paymentDiv}>
            <p className={styles.paymentP}>
              Payment Method <h4>Card/Cash on Arrival</h4>
            </p>
          </div>
          <button className={styles.button} onClick={() => handleCheckout()}>
            Place Order
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
