import React, { Component } from 'react'
import { CardComponent } from '../components/CardComponent';

//This is my UserScreen component, I render specific information about a clicked user.
export class UserScreen extends Component {
  render() {
    const userStatus = this.props.match.params.user //catching the params which sigifies the clicked user
    if (userStatus) { // Defining an if statements to either show the user or display that no user has been clicked.
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
