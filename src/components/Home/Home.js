import React from 'react';
//import Earn from "../../container/Earn/Earn";
import Reserved from '../Reserved/Reserved';
import User from "../../User/usersDashboad/usersDashboard";

const Home = () => (
    <header style={{textAlign: "center",
            background: "linear-gradient(rgb(25, 221, 146), rgb(67, 151, 199))",
            height: "100vh"
            }}> 
            {/* <UserNavigation />    */}
            {/* <Switch> */}
                {/* <Route path="/user/dashboard" component={ User } />
                <Route path="/user/account" component={ UserAccount } /> */}
                {/* <Earn /> */}
                <User />
                <Reserved />
            {/* </Switch> */}
    </header>
);

export default Home;