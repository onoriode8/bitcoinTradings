import React from 'react';
import classes from '../About.module.css';
import silverBtc from '../../assests/bitcoin_silver.jpg';
import goldBtc from '../../assests/gold_btc.png';
import premiumBtc from '../../assests/premium_btc.png';
import BTC from '../../assests/btc.jpg';
import Earn from '../../container/Earn/Earn';
import Reserved from '../Reserved/Reserved';
import testimonials from '../../assests/testimonials.jpg';
import test7 from '../../assests/tests.jpg';
import  test6 from '../../assests/tests6.jpg';

const about = () => (
     <header 
    //  className={classes.About}
     >
         <div className={classes.about}>
            <h1>ABOUT US</h1>
            <p className={classes.website}>A COMMERCIAL WEBSITE THAT TRADE CRYPTOCURRENCY AND LISTS OTHER BITCOIN RELATED INFO</p>
            <img className={classes.Img} src={BTC} alt='' />
            <p style={{color:"#fff"}}>ABOUT US</p>
            <div>The site is owned by Crypto-Trades. a registered company in the USA for 
                cryptocurrency investments solution. We give a chance to new, dynamilcally 
                developing ICO projects that bring huge profits in an amazing short time. 
                Join Us by choosing one of our plans today.
            </div>
            <div>Binary trading is based on a protocol known as the blockchain, 
                which allows to create, transfer and verify ultra-secure financial data
                without interference of third parties,
                therefore our trading feature leverage on this.
            </div>
        </div>
           <div style={{textAlign: "center", fontSize: "2em",
                 margin: "2em 0em", 
                 fontFamily: "fantasy", color: "grey"}}>OUR INVESTMENT PLANS</div>
           <div className={classes.plans}>
           <div className={classes.silver}>
                <img className={classes.silverImg} src={silverBtc} alt="" />
                <div style={{fontSize: "1.2em", 
                    textAlign:"center"}} className={classes.silverAccount}
                     >SILVER ACCOUNT</div>
                <div className={classes.silverMinimum}>Minimum Deposit - $500.00</div>
                <div className={classes.silverProfit}>Profit - $3000.00 and above</div>
           </div>
           <div className={classes.gold}>
                <img className={classes.goldImg} src={goldBtc} alt='' />
                <div style={{fontSize: "1.2em", margin: "-1px 0px", textAlign:"center"}}>GOLD ACCOUNT</div>
                <div className={classes.goldMinimum}>Minimum Deposit - $1500.00</div>
                <div className={classes.goldProfit}>Profit - $9500.00 and Above</div>
           </div>
           <div className={classes.premium}>
                <img src={premiumBtc} className={classes.premiumImg} alt='' />
                <div style={{fontSize: "1.2em", textAlign:"center"}}>PREMIUM ACCOUNT</div>
                <div className={classes.premiumMinimum}>Minimum Deposit - $2500.00</div>
                <div className={classes.premiumProfit}>Profit- $16000.00 and Above</div>
           </div>
           </div>
           <div className={classes.testimonials}>TESTIMONIALS</div>
            <div style={{display: "flex", justifyContent: "center"}}>
                        <div style={{ width: "20%", height: "20%"}}>
                            <img style={{ width: "80%", height: "80%"}} src={testimonials} alt="test" />
                            <div >This is what you call online mining. i had doubt at first but i decided to 
                                try with just little and watched it grow to something big but my biggest 
                                surprise was when i got my first pay the second one. Thank You vericoinminery.
                            </div>
                           <div><strong>Paul Smith</strong></div>
                        </div>
                    <div style={{ width: "20%", height: "20%"}}>
                        <img style={{ width: "80%", height: "80%"}} src={test7} alt="" />
                        <div>Just when I think its good enough, its just keeps getting better. 
                            Made over 4 withdrawals and I must confess that this is the best service i've ever recieved.</div>
                    <div><strong>Steven</strong></div>
                    </div>
                 <div style={{ width: "20%", height: "20%"}}>
                     <img style={{ width: "80%", height: "80%"}} src={test6} alt="testsss" />
                     <div>I have my normal monthly pay before Mr. Hassen introduced me to vericoinminery.
                          I never had a doubt because of the personality that got me into it, so today am 
                         earning good with vericoinminery. I urge you guys to give it a trial.</div>
                         <div><strong>Tina Lord</strong></div>
                 </div>
            </div>
           <Earn />
           <Reserved />
    </header>
);

export default about;
