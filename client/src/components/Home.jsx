import React, {useState, useEffect} from "react";
import styles from "../styles/Home.module.css";
import LoadingIcon from "./LoadingIcon";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className={styles.container}>
      <LoadingIcon />
      {data}
    </div>
  );
}

export default Home;