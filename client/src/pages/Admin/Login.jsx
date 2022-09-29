import axios from "axios";
import { useState } from "react";
import styles from "../../styles/Login.module.css";
import { useNavigate, Navigate } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const [authenticated, setauthenticated] = useState(sessionStorage.getItem("authenticated"));

  const handleClick = async () => {
    try {
      await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      }).then(() => {sessionStorage.setItem("authenticated", true)
                     navigate("/dashboard")});
    } catch (err) {
      setError(true);
    }
  };

  if (authenticated) {
    return <Navigate to="/dashboard"/>;
    } else {
      return (
    <div>
       <Navigation />
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
        <input
          placeholder="username"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick} className={styles.button}>
          Sign In
        </button>
        {error && <alert className={styles.error}>Invalid Credentials</alert>}
      </div>
    </div>
    < Footer />
    </div>
  );
  }
};

export default Login;