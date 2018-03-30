
import React, { Component } from 'react'
import {
    BrowserRouter,
    HashRouter,
    Route,
    Link,
    IndexRoute,
    Switch,
    Redirect
} from 'react-router-dom';

import Login from './components/LoginRegister/login'
import Installment from './components/installment'
import HomePage from './components/homepage'
import SeachInner from './components/seach/seach'
import MultilevelMenu from './components/multilevelMenu/menu'
import Register from './components/LoginRegister/register'
import Shopcar from './components/reduxShopcar/shopcar'
import Context from './components/ContextTab'
import ReduxTab from './components/ReduxTab'
class Iproce extends React.Component{
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/HomePage" component={HomePage}></Route>
                    <Route path="/shopcar" component={Shopcar}></Route>
                    <Route path="/login" component={Login} />
                    <Route path="/installment" component={Installment} />
                    <Route path="/seachInner" component={SeachInner} />
                    <Route path="/multilevelMenu" component={MultilevelMenu} />
                    <Route path="/register" component={Register} />
                    <Route path="/context" component={Context} />
                    <Route path="/reduxtab" component={ReduxTab} />
                    <Redirect to="/HomePage"/>    
                </Switch>    
            </HashRouter>
        )
    }
} 

export default Iproce;