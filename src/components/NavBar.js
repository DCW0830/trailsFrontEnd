import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Base Camp</NavLink>

      <NavLink
        to="/findTrails"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Find Trails</NavLink>

      <NavLink
        to='/LogIn'
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Log In</NavLink>

      <NavLink
        to='/SignUp'
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Sign Up</NavLink>

      <NavLink
        to='/logOut'
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Log Out</NavLink>
    </div>
  )
}

export default NavBar
