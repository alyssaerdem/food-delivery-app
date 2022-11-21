import { Navigate } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import styles from "../../styles/Dashboard.module.css";
import ProductForm from "../../components/ProductForm";
import { fetchProducts } from "../../redux/productThunks";
import { useDispatch } from "react-redux";
import ProductList from "../../components/ProductList";
import OrdersList from "../../components/OrderList";


const Dashboard = () => {
  const [authenticated, setauthenticated] = useState(sessionStorage.getItem("authenticated"));
  const [addProduct, setAddProduct] = useState(false)
  const [productList, setProductList] = useState(true)
  const [orderList, setOrderList] = useState(false)

  const dispatch = useDispatch();
    useEffect(() => {
         dispatch(fetchProducts()) }, [dispatch]); 

  const handleLogout = () => {
    sessionStorage.clear();
    setauthenticated(null);
  }
  
  if (!authenticated) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div>
        <Navigation />
            <div className={styles.container}>
            <h1 className={styles.welcomeH1}>Welcome to your Dashboard</h1>
            <button className={styles.Btn} onClick={() => {setProductList(!productList); setAddProduct(false); setOrderList(false)}}>View Products</button>
            <button className={styles.Btn} onClick={() => {setAddProduct(!addProduct); setProductList(false); setOrderList(false)}}> Add Product</button>
            <button className={styles.Btn} onClick={() => {setOrderList(!orderList); setAddProduct(false); setProductList(false)}}> View Orders</button>
            <button onClick={() => handleLogout()}>Logout</button>
            <div className={styles.productContainer}>
                {productList ? <div className={styles.item}><ProductList /> </div>: <div />}  
                {addProduct ? <div className={styles.item}><ProductForm /></div>: <div />}
                {orderList ? <div className={styles.item}><OrdersList /></div>: <div />}
            </div>
          </div>
        <Footer />
      </div>
    );
  }
};
export default Dashboard;