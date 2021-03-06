import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {

  render () {
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item><NavLink to='/giphs'>See all Giphs</NavLink></Menu.Item>
          <Menu.Item><NavLink to='/'>Home</NavLink></Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item><NavLink to='/login'>Login</NavLink></Menu.Item>
            <Menu.Item onClick={this.props.onLogout}>Logout</Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
