import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import '../assets/css/index.css'

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
    <Menu id='navBar'>
      <Menu.Item position='right'>
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{background: 'darkblue'}}
        >Base Camp</NavLink>
    </Menu.Item>
      <Menu.Item>
        <NavLink
          to="/findTrails"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Find Trails</NavLink>
      </Menu.Item>

      <Menu.Item>
        <NavLink
          to='/logOut'
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Log Out</NavLink>
      </Menu.Item>
    </Menu>
  )
}

export default NavBar
