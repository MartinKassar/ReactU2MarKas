import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class NavBarComponent extends Component {
  render() {
    return (
      <div>
        <NavLink to ='/login'>login</NavLink>
        <br />
        <NavLink to ='/dashboard'>Dashboard</NavLink>
        <br />
        <NavLink to ='/user'>User</NavLink>
      </div>
    )
  }
}

export default NavBarComponent
