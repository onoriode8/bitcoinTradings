import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';
import { AiOutlineMenu } from 'react-icons/ai';
import Logo from '../../assests/Logo.jpg';
import { withRouter } from 'react-router-dom';


const Navigation = (props) => {
    const [toggle, setToggle] = useState(true);

    const toggleNavigationHandler = () => {
       const toggles = toggle;
       setToggle(!toggles);
       console.log(props);
    };


    return (

    <header style={{backgroundColor: "black"}}>
        <div style={{backgroundColor: "black"}} className={classes.icons}>
            <img style={{
            width: "7em",
            height: "5em",
            color: "rgb(241, 158, 4)"
            }} 
            src={Logo} alt="logo" />
        <div className={classes.cryptoTrades}><strong>Crypto-Trades</strong></div>
        
        <AiOutlineMenu className={classes.menu} onClick={toggleNavigationHandler}/>
        </div>
        {toggle ? 
        <ul>
            <li className={classes.list}><NavLink className={classes.home} 
              to={{ pathname: props.match.url +  "/user/home" }}><strong>HOME</strong></NavLink></li>
            <li className={classes.list}><NavLink className={classes.about} to="/"><strong>ABOUT CRYPTOCURRENCY</strong></NavLink></li>
            <li className={classes.list}><NavLink className={classes.contact} to="/contactUs"><strong>CONTACT US</strong></NavLink></li>
            <li className={classes.list}><NavLink className={classes.login} to="/login"><strong>LOGIN</strong></NavLink></li>
            <li className={classes.list}><NavLink className={classes.register} to="/register"><strong>REGISTER</strong></NavLink></li>
        </ul> : null }
    </header>
);
    }

export default withRouter(Navigation);