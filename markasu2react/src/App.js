import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import NavBarComponent from './components/NavBarComponent'

import DashboardScreen from './screens/DashboardScreen'
import LoginScreen from './screens/LoginScreen'
import UserScreen from './screens/UserScreen'


class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <NavBarComponent />
      <Route path="/login" component={LoginScreen} />
      <Route path="/dashboard" component={DashboardScreen} />
      <Route path="/user" component={UserScreen} />
      </BrowserRouter>
      <LoginScreen/>
      </div>
    );
  }
}

export default App;
