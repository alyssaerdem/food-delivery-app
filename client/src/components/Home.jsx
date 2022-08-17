import React, {useState, useEffect} from "react";
import { GiFullPizza } from 'react-icons/gi';
import styles from "../styles/Home.module.css";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <GiFullPizza className={styles.logo} alt="logo"/>
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default Home;