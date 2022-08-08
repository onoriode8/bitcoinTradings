import React, {useState} from 'react';
import Earn from '../../container/Earn/Earn';
import classes from './Login.module.css';
import Reserved from '../Reserved/Reserved';
import axios from 'axios';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitLogin = (e) => {
        e.preventDefault();
        const loginDetails = {
            method: "post",
            body: JSON.stringify({
                email: email,
                password: password
            })
        };
        axios.post("http://localhost:8080/signin", loginDetails)
        .then(res => {
            props.history.push("/user/dashboard");
        })
        .catch((err) => {});
    }

    return (     
    <header>
        <form onSubmit={onSubmitLogin}>
            <div style={{textAlign: "center", marginTop: "20px", color: "rgb(94, 94, 247)"}}><strong>Login</strong></div>
            <input className={classes.inputs} type="email" placeholder="EMAIL" onChange={(e) => setEmail(e.target.value)} name="email" />
            <input className={classes.inputs} type="psw" placeholder="PASSWORD" onChange={(event) => setPassword(event.target.value)} name="psw" />
            <div style={{textAlign: "center"}}>
                <button type="submit" className={classes.loginButton}>Login</button>
             </div>
        </form>
        <Earn />
        <Reserved />
    </header>
  );
};

export default Login;