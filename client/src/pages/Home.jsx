import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [data, setData] = useState(null);
  console.log(`url(${process.env.PUBLIC_URL + "/home-background.png"})`);
  return (
    <div>
      <Navigation />
      <div
        className={styles.container}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/home.png"})`,
          backgroundSize: "cover",
        }}
      >
        {/* <img src={process.env.PUBLIC_URL + "/home.png"} alt="home page" /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
