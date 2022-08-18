import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.heading}>
            Pizza
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Locations</h1>
          <p className={styles.text}>
            1624 Pizza Rd.
            <br /> New York City, 10001
            <br /> (212) 827-1010
          </p>
          <p className={styles.text}>
            567 Calzone Ave.
            <br /> New York City, 10001
            <br /> (212) 827-1011
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Hours</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>About</h1>
          <p className={styles.text}>
            Our Story
          </p>
          <p className={styles.text}>
            Careers
          </p>
          <p className={styles.text}>
            Contact
          </p>
          <p className={styles.text}>
            Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;