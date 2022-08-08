import Earn from '../../container/Earn/Earn';
import classes from './Register.module.css';
import Reserved from '../Reserved/Reserved';

const register = () => {
    return (
    <header style={{textAlign: "center"}}>
        <div style={{color: "rgb(94, 94, 247)", marginTop: "20px"}}><strong>Sign up</strong></div>
          <div className={classes.sign}>
            <input type="text" placeholder="FIRST NAME" className={classes.inputs}/>
            <input type="text" placeholder="LAST NAME" className={classes.inputs}/>
            <input type="email" placeholder="EMAIL" required className={classes.inputs}/>
            <input type="number" placeholder="PHONE NUMBER" className={classes.inputs}/>
            <input type="text" placeholder="ENTER COUNTRY" required className={classes.inputs}/>
        </div>
        <select style={{width: "50%", padding: "10px 16px"}}>
                <option value="select">--Select trading currency--</option>
                <option value="USA">USD - US Dollar</option>
                <option value="Canada">CAD - Canada Dollar</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="EURO">EUR - Euro</option>
                <option value="USA">GBP - British Pound</option>
        </select>
        <input type="psw" placeholder="PASSWORD" className={classes.inputs}/>
        <div className={classes.passwordText}><strong>Password must be at least 8 characters</strong></div>
        <br />
        <button className={classes.registerButton}>Register</button>
        <Earn/>
        <Reserved />
    </header>
);
};


export default register;