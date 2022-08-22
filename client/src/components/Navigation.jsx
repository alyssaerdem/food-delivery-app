import React, {useState} from "react";
import styles from "../styles/Navigation.module.css"
import { FaShoppingCart } from 'react-icons/fa';
import Logo from "../logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

const Navigation = () => {


    const scrollDown = () => {
        console.log("here")
        window.scroll({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    };

    const [openMenu, setOpenMenu] = useState(false);

    const toggleOpenMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
    <div className={styles.container}>
        <div className={styles.logoDiv}>
        <img src={Logo} alt="Pizza Bella logo" className={styles.logo}/> 
        </div>
        <div className={styles.item}>
         <ul className={styles.list}>
            <li className={styles.listItem}>
                <Link to="/" className={styles.link}>Home</Link>
            </li>
            <li className={styles.listItem}>
                <Link to="/products" className={styles.link}>Products</Link>
            </li>
            <li className={styles.listItem}>
                <p className={styles.pLink} onClick={()=> scrollDown()}>About</p>
            </li>
            </ul>
         </div>
        <div className={styles.item}>
            <div className={styles.cart}>
            <Link to="/cart" className={styles.link}>
                <FaShoppingCart className={styles.cartIcon}/>
                <div className={styles.counter}>1</div>
            </Link>   
        </div>
        </div>
        <div className={styles.sideMenu}>
        <div>
            {!openMenu ? <GiHamburgerMenu onClick={toggleOpenMenu} className={styles.hamburgerIcon}/> :
            <GrClose onClick={toggleOpenMenu} className={styles.hamburgerIcon}/> }
            <div className={styles.openMenu} style={{ display: (openMenu ? 'block' : 'none') }}>
                <div className={styles.sideItem}>
                    <Link to="/" className={styles.link}>Home</Link>
                </div>
            <div className={styles.sideItem}>
                <Link to="/products" className={styles.link}>Products</Link>
            </div>
            <div className={styles.sideItem}>
                <p className={styles.pLink} onClick={()=> scrollDown()}>About</p>
            </div>

            <div className={styles.sideItem}>
                <Link to="/cart" className={styles.link}>
                     Cart&nbsp;
                    <FaShoppingCart className={styles.cartIcon}/>
                    <div className={styles.counter}>1</div>
                </Link>  
            </div>
            </div>
        </div>
        </div>
        
       </div>
      
    )
};

export default Navigation;