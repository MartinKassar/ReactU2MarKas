import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class NavBarComponent extends Component {
  render() {
    return (
      <div>
        <NavLink to ='/login' activeClassName='selected'>login</NavLink>
        <br />
        <NavLink to ='/dashboard' activeClassName='selected'>Dashboard</NavLink>
        <br />
        <NavLink to ='/user' activeClassName='selected'>User</NavLink>
      </div>
    )
  }
}

export default NavBarComponent
