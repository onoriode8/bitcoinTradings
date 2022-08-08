import React, {useState, useRef, useEffect} from 'react';
import classes from './userWithdraw.module.css';
import Reserved from '../../components/Reserved/Reserved';
import Spinner from '../../components/Spinner/spinner';
import { SiBitcoinsv } from 'react-icons/si';
import axios from 'axios';

const UserWithdraw = (props) => {
    const [bankName, setBankName] = useState("");
    const [bankAccount, setBankAccount] = useState("");
    const [bankNumber, setBankNumber] = useState("");
    const [bitcoin, setBitcoin] = useState("");
    const [selectOptions, setSelectOptions] = useState("");
    const [spinner, setSpinner] = useState(false);
    const [Withdraws, setWithdraw] = useState(false);
    const [error, setError] = useState(null);
    const [Else, setElse] = useState(false);

    const inputElement = useRef();

    useEffect(() => {
        inputElement.current.focus();
    }, []);

    const bitcoinCheckHandler = (e) => {
        e.preventDefault();
        setSpinner(true);
        if(bitcoin.trim().length >= 40) {
            const Btcwithdraw = {
                method: "post",
                body: JSON.stringify({
                    BitcoinAddress: bitcoin
                })
            }
          axios.post("/bitcoinWithdraw.json", Btcwithdraw)
            .then(response => {
                setSpinner(false);
                setWithdraw(true);
                setTimeout(() => {
                    props.history.push("/user/dashboard");
                }, 10000);
            })
            .catch(() => {
                setSpinner(true);
                setError(true);
            })
        } else {
            setElse(true);
        }
    }

    const checked = (e) => {
        e.preventDefault();
        // send the below details to database...
        setSpinner(true);
        if(bankName.trim().length > 5 && bankNumber.trim().length >= 10) {
            const withdraw = {
                method: "post",
                body: JSON.stringify({
                    BankName: bankName,
                    BankAccount: bankAccount,
                    BankNumber: bankNumber,
                    BitcoinAddress: bitcoin,
                    select: selectOptions
                })
            }
          axios.post("/withdraw.json", withdraw)
            .then(response => {
                setSpinner(false);
                setWithdraw(true);
                setTimeout(() => {
                    props.history.push("/user/dashboard");
                }, 10000);
            })
            .catch(() => {
                setSpinner(true);
                setError(true);
            })
        } else {
            setElse(true);
        }
    };

    return (
        <>
        <header 
        style={{
            textAlign: "center", 
            marginTop: "8em"}} 
            className={classes.container}>
            <p style={{color: "#fff"}}>Provide Correct Details</p>
            {Withdraws ? 
            <p>
                <SiBitcoinsv style={{color: "orange", fontSize: "2.5em"}}/>
                <br />
                <div style={{color: "green"}}><strong>Your withdraw details have been sent successfully</strong></div>
            </p> : null }
            {error ? <p>{error.message}</p> : null }
        <form onSubmit={checked}>
            <label style={{color: "#fff"}}>Withdrawal Plans</label>
            <br />
            <select style={{marginTop: "0.25em", width: "80%", padding: "0.5%"}} 
                    onChange={(e) => setSelectOptions(e.target.value)}>
                <option value='withdraw method'>Select Withdrawal Method</option>
                <option value='Bitcoin BTC'>Bitcoin BTC</option>
                <option value='Ethereum ETH'>Ethereum ETH</option>
                <option value='Bank Withdrawal'>Bank Withdrawal</option>
            </select>
            <div className={classes.textContainer}>
               <p 
                  className={classes.bankText}>
                      Fill these fields if you want a bank withdraw
              </p>
            {spinner ? <Spinner /> : null }
            </div>
        <div className={classes.bankstyle}>
                <label>Bank Name</label>
                <br />
                    <input ref={inputElement} onChange={(e) => setBankName(e.target.value.toUpperCase())} style={{
                        marginBottom: "3em",
                        width: "80%",
                        padding: "5px 3px"
                      }} type='text' />
                    <br />
                <label>Bank Account Name</label>
                <br />
                    <input onChange={(e) => setBankAccount(e.target.value.toUpperCase())} style={{
                        marginBottom: "2em",
                        width: "80%",
                        padding: "5px 3px"
                      }} type='text' />
                    <br />
                    <label>Bank Account Number</label>
                <br />
                <input type='number' onChange={(e) => setBankNumber(e.target.value)}
                  style={{
                        // marginBottom: "2em",
                        width: "80%",
                        padding: "5px 3px" 
                    }}/>
                </div>
                <button 
            style={{
                padding: "5px 20px",
                marginTop: "16px",
                borderRadius: "0.8em",
                backgroundColor: "green",
                color: "#fff",
                cursor: "pointer"
            }}
                >Bank Withdraw</button>
        </form>
            <p className={classes.bitcoinText}>
                Fill these fields if you want a bitcoin withdraw
            </p>
        <form onSubmit={bitcoinCheckHandler}>
            <label style={{color: "#fff"}} htmlFor='btc-address'>Bitcoin Address</label>
            <input type='text' onChange={(e) => setBitcoin(e.target.value)} name='btc-address'
            style={{
                width: "80%",
                padding: "5px 3px" 
            }}/>
            <br />
            {Else ? <p style={{color: "red", fontFamily: "fantasy"}}>Enter A valid Inform</p> : null }
            <button 
            style={{
                padding: "5px 20px",
                marginTop: "16px",
                borderRadius: "0.8em",
                backgroundColor: "green",
                color: "#fff",
                cursor: "pointer"
            }}
                >BTC Withdraw</button>
        </form>  
        </header>
            <Reserved />
        </>
    );
}


export default UserWithdraw;