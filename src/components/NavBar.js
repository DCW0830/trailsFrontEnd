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
        to="/home"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Home</NavLink>

      <NavLink
        to="/findTrails"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Find Trails</NavLink>

      <NavLink
        to="/myTrails"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >My Trails</NavLink>
      <NavLink
        to='/'
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
