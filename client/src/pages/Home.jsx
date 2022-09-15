import React, {useState, useEffect} from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import LoadingIcon from "../components/LoadingIcon";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <Navigation />
      <div className={styles.container}>
      <LoadingIcon />
        {data}
      </div>
      <Footer />
    </div>
  );
}

export default Home;