import React, { Component } from 'react'
import CardComponent from '../components/CardComponent';
import WrapperComponent from '../components/WrapperComponent';


export class LoginScreen extends Component {

  redirectToDash = () => {
    this.props.history.push('/dashboard')
  }
  render() {
    return (
      <div>
        <CardComponent myVar={'info'} myInfo={'this is info'}>
            <input />
            <button onClick={this.redirectToDash}>Login</button>
        </CardComponent>
      </div>
    )
  }
}

export default LoginScreen
