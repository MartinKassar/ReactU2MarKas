import React, { Component } from 'react'
import { CardComponent } from '../components/CardComponent';

export class UserScreen extends Component {
  render() {
    const userStatus = this.props.match.params.user
    if (userStatus) {
      this.user = userStatus
    } else if (userStatus === undefined) {
      this.user = 'No selected user.'
    }
    
    return (
      <div>
        <CardComponent>
        {this.user}
        </CardComponent>
      </div>
    )
  }
}

export default UserScreen
