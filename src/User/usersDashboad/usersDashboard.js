import React, { Component } from 'react';
import classes from './usersDashboard.module.css';
import userDashboard from '../../assests/figmaDashboard.jpg';
import Account from '../../User/Account/Account';
import Spinner from '../../components/Spinner/spinner';
import axios from 'axios';

class UserDashBoard extends Component {
    state = {
        Balance: null,
        invested: null,
        BTC_Balance: null,
        error: null
    }
    // const [Balance] = useState(0);
    // const [invested] = useState(0);
    // const [BTC_Balance] = useState(0);

    componentDidMount() {
        axios.get("/InvestedPlans.json")
        .then(response => {
            this.setState({ 
                Balance: response.data.Balance,
                invested: response.data.invested,
                BTC_Balance: response.data.BTC_Balance
            })
        })
        .catch((err) => this.setState({error: err}) );
    };

    render () {
        const { Balance, invested, BTC_Balance, error } = this.state;
    return (
        <header className={classes.dashboard_header}>
            <img src={userDashboard} alt='' className={classes.Img}/>
            <div className={classes.user_header}>
                <article className={classes.user_article}>
                    {/* fetch the user name from real database to welcome below */}
                    <div>Welcome : {}</div>
                    <div>Balance : ${Balance}</div>
                    <div>Invested : ${invested}</div>
                    <div>BTC Balance : {BTC_Balance}</div>
                </article>
            </div>
         {error ? <div style={{marginTop: "10px"}}>
                    <div style={{color: "green", fontFamily: "fantasy", marginTop: "10px"}}>{error.message}</div>
                    <div style={{color: "green", fontFamily: "fantasy"}}>Bad connection, check your internet connection.</div>
                    <Spinner style={{fontSize: "2px"}}/>
                 </div> : null}
             <Account />
        </header>
    );
}
}

export default UserDashBoard;