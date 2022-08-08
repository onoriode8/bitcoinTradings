import React, { Component } from 'react';
import About from '../../components/About/About';
import ContactUs from '../../components/Contact us/ContactUs';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import Home from '../../components/Home/Home';
import classes from './App.module.css';
import WrongPage from '../../components/404Page/404Page';
import UserAccount from '../../User/UserAccount/UserAccount';
import UserNavigation from '../../User/UserNavigation/UserNavigation';
import UserWithdraw from '../../User/UserWithdraw/UserWithdraw';
import VerifyAccount from '../../User/VerifyAccount/VerifyAccount';
import SideDrawer from '../../User/SideDrawer/SideDrawer';
import ErrorPage from '../../User/ErrorPage';
// import axios from 'axios';

class App extends Component {
    state = {
        auth: true,
        mouse: false,
        side: false
    }

    onMouseEnterHandler = () => {
        const mouses = this.state.mouse;
        this.setState({mouse: !mouses});
    };

    onSideDrawerHandler = () => {
        this.setState({side: true});
    }

    sideDrawerClose = () => {
        this.setState({side: false});
    }

    render() {
        let Authentication = <div>
            <Navigation />
                <Switch>
                  <Route path="/user/home" exact component={Home} />
                  <Route path="/register" exact component={Register} />
                  <Route path="/login" exact component={Login} />
                  <Route path="/" exact component={About} />
                  <Route path="/contactUs" exact component={ContactUs} />
                  <Route exact component={WrongPage} />
                  <Redirect to="/" />
              </Switch>
         </div>
        if(this.state.auth) {
            Authentication = <div>
               <UserNavigation  
                     onSideDrawerHandler={this.onSideDrawerHandler}
                     />
                     <SideDrawer 
                     Mouse={this.onMouseEnterHandler}
                     Side={this.state.side} 
                     mouse={this.state.mouse}
                     sideDrawerClose={this.sideDrawerClose}
                   />
                        <Switch>
                            <Route path="/user/dashboard" exact component={Home} />
                            <Route path="/user/fund" exact component={ UserAccount } />
                            <Route path="/user/withdraw" exact component={ UserWithdraw } />
                            {/* <Route component={WrongPage} /> */}
                            <Route path="/user/verify-account" exact component={VerifyAccount} />
                           <Route exact component={ErrorPage} />
                           <Redirect to="/user/dashboard" />
                        </Switch>
                    </div>
        } 
        return (
            <React.Fragment>
                <header className={classes.App}>
                     { Authentication } 
                    {/* <Navigation />  */}
                    {/* <Switch> */}
                        {/* <Route path="/user/home" component={Home} /> */}
                        {/* <Route path="/register" component={Register} /> */}
                        {/* <Route path="/login" component={Login} /> */}
                        {/* <Route path="/" exact component={About} /> */}
                        {/* <Route path="/contactUs" component={ContactUs} /> */}
                        {/* <Route component={WrongPage} /> */}
                    {/* </Switch> */}

                {/* <UserNavigation  
                    onSideDrawerHandler={this.onSideDrawerHandler}
                    />
                    <SideDrawer 
                    Mouse={this.onMouseEnterHandler}
                    Side={this.state.side} 
                    mouse={this.state.mouse}
                    sideDrawerClose={this.sideDrawerClose}
                  />
                       <Switch>
                           {/* <Route path="/user/home" component={Home} /> */}
                           {/* <Route path="/user/dashboard" exact component={Home} /> */}
                           {/* <Route path="/" exact component={Home} />
                           <Route path="/fund" component={ UserAccount } />
                           <Route path="/withdraw" component={ UserWithdraw } />
                           <Route path="/verify-account" component={VerifyAccount} />
                           <Route component={ErrorPage} /> */}
                       {/* </Switch> */}
                </header>
            </React.Fragment>
        )
    }
}

export default App;