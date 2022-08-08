import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './SideDrawer.module.css';
import { GrBitcoin } from 'react-icons/gr';

const SideDrawer = ({ Side, Mouse, mouse, sideDrawerClose }) => {

    let enter = null;
    if(mouse) {
        enter = 
        <ul className={classes.mouseClick}>
            <li style={{marginBottom: "10px"}}><NavLink onClick={sideDrawerClose} className={classes.mouse_li}  to="/user/fund">Fund Account</NavLink></li>
            <li><NavLink className={classes.mouse_li} onClick={sideDrawerClose} to="/user/withdraw">Withdrawals</NavLink></li>
        </ul>
    }

    let assignClass = [classes.sideDrawer, classes.close];
    if(Side) {
        assignClass = [classes.sideDrawer, classes.open];
    }

    return (
        <>
            <header>
            {Side && <div onClick={sideDrawerClose} style={{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                width: "100%",
                height: "100vh",
                position: "fixed",
                top: "0",
                zIndex: "110"
            }}></div>}
        <div className={assignClass.join(" ")} >
            <nav>
                <ul className={classes.sideDrawer_ul}>
                    <li style={{ cursor: "pointer"}}><GrBitcoin style={{color: "orange", fontSize: "2em"}} /></li>
                    <li style={{marginBottom: "10px"}}><NavLink onClick={sideDrawerClose} className={classes.sideDrawer_li} to="/user/dashboard">Dashboard</NavLink></li>
                    <li style={{
                       color: "green",
                       marginLeft: "3em",
                       marginBottom: "10px"
                     }} onClick={Mouse}>Accounts</li>
                    {enter}
                    <li style={{marginBottom: "10px"}}><NavLink onClick={sideDrawerClose} className={classes.sideDrawer_li}  to="/user/verify-account">Verify Account</NavLink></li>
                    {/* <li style={{marginBottom: "10px"}}><a className={classes.sideDrawer_li}  href="/user/account-upgrade">Account Upgrade</a></li> */}
                    {/* <li><a className={classes.sideDrawer_li}  href="/user/trade-history">Trade History</a></li> */}
                </ul>
            </nav>
            </div>       
        </header> 
        </>
    );
};

export default SideDrawer;