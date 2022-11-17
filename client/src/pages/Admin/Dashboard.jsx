import { Navigate } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import styles from "../../styles/Dashboard.module.css";
import ProductForm from "../../components/ProductForm";
import { useSelector } from 'react-redux';
import {selectProducts} from '../../redux/reducers/productSlice';
import { fetchProducts } from "../../redux/productThunks";
import { useDispatch } from "react-redux";
import ProductList from "../../components/ProductList";


const Dashboard = () => {
  const [authenticated, setauthenticated] = useState(sessionStorage.getItem("authenticated"));
  const [addProduct, setAddProduct] = useState(false)
  const [productList, setProductList] = useState(false)

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
            <h1>Welcome to your Dashboard</h1>
        <button onClick={() => setAddProduct(!addProduct)}> Add Product</button>
        <button onClick={() => setProductList(!productList)}> View Products</button>
        {addProduct ? <ProductForm /> : <div />}
        {productList ? <ProductList /> : <div />}
               
            
                <button onClick={() => handleLogout()}>Logout</button>
          </div>
        <Footer />
      </div>
    );
  }
};
export default Dashboard;