import React, { Component } from 'react'
import CardComponent from '../components/CardComponent';
import WrapperComponent from '../components/WrapperComponent';

export class LoginScreen extends Component {
  render() {
    return (
      <div>
        <WrapperComponent>
            <h1>I am LOGIN</h1>
        </WrapperComponent>
      </div>
    )
  }
}

export default LoginScreen
