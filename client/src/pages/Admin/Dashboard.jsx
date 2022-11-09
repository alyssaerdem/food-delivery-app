import { Navigate } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { useState } from "react";
import styles from "../../styles/Dashboard.module.css";
import ProductForm from "../../components/ProductForm";
import { useSelector } from 'react-redux';
import {selectProducts} from '../../redux/reducers/productSlice';

import LoadingIcon from "../../components/LoadingIcon";


const Dashboard = () => {
  const [authenticated, setauthenticated] = useState(sessionStorage.getItem("authenticated"));
  const products = useSelector(selectProducts)
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
                <div className={styles.container}>
                  <ul>
                {!products ? <div className={styles.LoadingIconDiv}> <LoadingIcon /> </div>:
                  products.map(product => (
                    <li>{product.name}</li>
                  )
                 )}
                 </ul>
        </div>
                <ProductForm />
                <div className={styles.wrapper}>
                <button onClick={() => handleLogout()}>Logout</button>
                </div>
            </div>
        <Footer />
      </div>
    );
  }
};
export default Dashboard;