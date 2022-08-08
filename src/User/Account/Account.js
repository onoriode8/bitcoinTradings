import React, {useState} from 'react';
import classes from './Account.module.css';

const Account = () => {
    const [status] = useState("unverified");
    const [Total_profit] = useState(0);

    return (
    <header className={classes.account_header}>
        <div className={classes.account}>
            <div>A/c Status : {status}</div>
            <div>Total Profit : ${Total_profit}</div>
        </div>
    </header>
);

}

export default Account;