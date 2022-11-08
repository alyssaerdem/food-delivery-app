import { Navigate } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { useState } from "react";
import styles from "../../styles/Dashboard.module.css";
import ProductForm from "../../components/ProductForm";

const Dashboard = () => {
  const [authenticated, setauthenticated] = useState(sessionStorage.getItem("authenticated"));

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
                <p>Welcome to your Dashboard</p>
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