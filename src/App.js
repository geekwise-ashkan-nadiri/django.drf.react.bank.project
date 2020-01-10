import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from "react-redux";
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Branches from './components/pages/Branches';
import Accounts from './components/pages/Accounts';
import Customers from './components/pages/Customers';
import Products from './components/pages/Products';
import Login from './components/accounts/Login';
import Register from './components/accounts/Register'
import PrivateRoute from './components/layout/PrivateRoute'
import store from './Store'


import './App.css' 




class App extends Component {
  
  render() {
    return (
      <Provider store = {store}>
        <Router>
          <div >
              <Header/>
              <PrivateRoute exact path="/" component={Home} />
              <Route path="/branches" component={Branches}/>
              <Route path ="/customers" component={Customers}/>
              <Route path ="/accounts" component={Accounts}/>
              <Route path = "/products" component={Products}/>
              <Route path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
          </div>    
        </Router>
      </Provider>
      
      
      
    );
  }
}

export default App;