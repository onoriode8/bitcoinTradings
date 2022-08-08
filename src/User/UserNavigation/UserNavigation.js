import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import classes from './UserNavigation.module.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrBitcoin } from 'react-icons/gr';

const UserNavigation = ({onSideDrawerHandler}) => {
    const [toggle, setToggle] = useState(false);

            const toggleHandler = () => {
                const handle = toggle;
                setToggle(!handle);
            };

            let Toggle = null;
            if(toggle) {
                Toggle =
                    <div className={classes.userToggle}>
                        <ul>
                            <li><NavLink 
                            className={classes.li_UserNavigations} 
                            to="/user/fund">Fund Account</NavLink></li>
                            <li><NavLink 
                            className={classes.li_UserNavigations} 
                            to="/user/withdraw">Withdrawals</NavLink></li>
                        </ul>
                    </div>
            };
            

        return (
        <header>
            <nav>
                <ul className={classes.ul_UserNavigation}>
            <div 
                className={classes.toogle}>
                <div><AiOutlineMenu  
                 onClick={onSideDrawerHandler}
                   style={{
                        fontSize: "2em", 
                        marginRight: "200px", 
                        cursor: "pointer",
                        color: "#fff"}} />
                </div>
                    <li style={{ cursor: "pointer"}}><GrBitcoin style={{color: "orange", fontSize: "2em"}} /></li>
            </div>
                    <li><NavLink className={classes.li_UserNavigation} to="/user/dashboard">Dashboard</NavLink></li>
                    <li onMouseEnter={toggleHandler} className={classes.toggle_list}>Accounts</li>
                    {Toggle}
                    <li><NavLink className={classes.li_UserNavigation} to="/user/verify-account">Verify Account</NavLink></li>
                    {/* <li><a className={classes.li_UserNavigation} href="/user/account-upgrade">Account Upgrade</a></li> */}
                    {/* <li><a className={classes.li_UserNavigation} href="/user/trade-history">Trade History</a></li> */}
                    {/* <li className={classes.toggle_list}>Logout</li> */}
                </ul>
            </nav>
        </header>
    );
};

export default withRouter(UserNavigation);