import React, {useState} from 'react';
import styles from "../styles/Login.module.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    console.log(username)
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <form>
                    <div className={styles.formItem}>
                        <label for="username">Username: </label>
                        <input value={username} onChange={event => setUsername(event.target.value)} required={true}/>
                    </div>
                    <div className={styles.formItem}>
                        <label for="password">Password:   </label>
                        <input value={password} onChange={event => setPassword(event.target.value)} required={true} type={password}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;