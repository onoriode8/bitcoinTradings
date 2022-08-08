import React, { useState, useEffect } from 'react';
import classes from "./UserAccount.module.css";
import bitcoinFunds from '../../assests/bitcoin-funds.jpg';
import Reserved from '../../components/Reserved/Reserved';
import Backdrop from '../Backdrop';
import scanCode from '../../assests/btc_scancode.jpg';
import axios from 'axios';

const UserAccount = () => {
    const [toggleBTC, setToggleBTC] = useState(false);
    const [BTC_address, setBTC_address] = useState(null);
    const [btc, setBtc] = useState("");
    const [btc1, setBtc1] = useState(false);
    const [btcs, setBtcs] = useState("");
    const [btcs1, setBtcs1] = useState(false);
    const [bitcoin, setBitcoin] = useState("");
    const [bitcoin1, setBitcoin1] = useState(false);

    useEffect(() => {
        axios.get("/btcAddress.json")
        .then(response => {
            setBTC_address(response.data);
        })
        .catch(() => {});
    }, []);

    useEffect(() => {

        // set image slideshow
     setTimeout(() => {
        setBtc("https://thinkmaverick.com/wp-content/uploads/2020/12/4.png");
        setBtc1(true);
     }, 1000);

     setTimeout(() => {
         setBtc1(false);
     }, 11000);

     setTimeout(() => {
        setBtcs("https://blog.cex.io/wp-content/uploads/2015/06/Keep-Your-Bitcoins-Safe.png");
        setBtcs1(true);
    },16000);

    setTimeout(() => {
        setBtcs1(false);
    }, 26000);

     setTimeout(() => {
        setBitcoin("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3sevs4cvz0b8BxVkoG9-Aff-_ndhIqckm9FZqMD9i0Yqu0Vpch9MmC4M4EHsiEWmNTD4&usqp=CAU");
        setBitcoin1(true);
    }, 30000);

    setTimeout(() => {
        setBitcoin1(false);
    }, 40000);
}, []);


    let BTC = null;
    if(toggleBTC) {
        BTC =
           <>
             <Backdrop back={() => setToggleBTC(false) }/>
             <div className={classes.show_BTC}>
                <div className={classes.fund}>Account Funding</div>
                <hr />
                <img src={scanCode} alt="" className={classes.scancode}  />
                <div className={classes.btc_text}>All Bitcoin Payment should be sent to the Bitcoin address below.</div>
                {BTC_address ? <p className={classes.btc_address}>{BTC_address.BTC}</p> : null }
                <div>Once we confirm your payment, your account will be funded immediately.</div>
                <hr />
              </div>
            </>
    }

    // const btc = "https://www.newsbtc.com/wp-content/uploads/2022/04/bitcoin-9.jpeg";
    // const btcs = "https://fmmeridiano985.com.ar/noticias/wp-content/uploads/2022/05/bitcoin-inicia-la-semana-con-buenas-noticias-cual-es-su-precio-este-lunes.jpg";
    // const bitcoin = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8dd0gzNmIV-Hj0WsgJH9rogy58hx7hA1yMSz2seUR5-Y3mX11L5f2a7RravIzUuovJHI&usqp=CAU";
    return (
        <header>
            <div style={{textAlign: "center", marginTop: "10em"}}>
                    {BTC}
                    <div style={{color: "#fff", fontFamily: "fantasy"}}>All payments should be made to Bitcoin Cryptocurrency</div>
                <div className={classes.bitcoin_container}>
                    <div className={classes.bitcoin}>Bitcoin</div>
                    <img className={classes.image_funds} src={bitcoinFunds} alt='' />
                    <br />
                    <button className={classes.bitcoin_button} 
                        onClick={() => setToggleBTC(true)}
                    >Get Bitcoin Address</button>
                </div>
            </div>


          <div style={{ marginTop: "3em"}}>
                <div className={classes.btc1} style={{
                    tranform: btc !== "" && btc1 ? "translateY(0)" : "translateY(-100vh)"
                }}>
                        {btc !== "" && btc1 ? <img style={{width: "20%", height: "20%"}} src={btc} alt='' /> : null }
                </div>
                <div className={classes.btc1} style={{
                    tranform: btcs !== "" && btcs1 ? "translateY(0)" : "translateY(-100vh)"
                }}>
                        {btcs !== "" && btcs1 ? <img style={{width: "20%", height: "20%"}} src={btcs} alt='' /> : null }
                </div>
                <div className={classes.btc1} style={{
                    tranform: bitcoin !== "" && bitcoin1 ? "translateY(0)" : "translateY(-100vh)"
                }}>
                        {bitcoin !== "" && bitcoin1 ? <img style={{width: "20%", height: "20%"}} src={bitcoin} alt='' /> : null }
                </div>
         </div>
         <Reserved style={{marginTop: "5em"}} />
    </header>
    );
}

export default UserAccount;