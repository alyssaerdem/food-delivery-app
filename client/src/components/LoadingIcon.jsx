import React from "react";
import { GiFullPizza } from 'react-icons/gi';
import styles from "../styles/LoadingIcon.module.css";

const LoadingIcon = () => {
    return (
<header className={styles.header}>
        <GiFullPizza className={styles.pizzaIcon} alt="logo"/>
        <p>Loading...</p>
</header>
    )
}

export default LoadingIcon;