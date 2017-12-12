import React from "react";
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import Bundle from './Bundle';

import Home from "bundle-loader?lazy&name=home!pages/Home/Home";
import Page1 from "bundle-loader?lazy&name=page1!pages/Page1/Page1";
import Counter from "bundle-loader?lazy&name=counter!pages/Counter/Counter";
import UserInfo from "bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo";

const Loading = function () {
    return <div>Loading...^v^</div>
};


const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component/> : <Loading/>
        }
    </Bundle>
);

const getRouter = ()=>(
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">page1</Link></li>
                <li><Link to="/counter">counter</Link></li>
                <li><Link to="/userinfo">userinfo</Link></li>
                <Switch>
                    <Route exact path="/" component={createComponent(Home)} />
                    <Route path="/page1" component={createComponent(Page1)} />
                    <Route path='/counter' component={createComponent(Counter)} />
                    <Route path='/userinfo' component={createComponent(UserInfo)} />
                </Switch>
            </ul>
        </div>
    </Router>
)

export default getRouter;