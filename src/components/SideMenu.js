import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import './SideMenu.css'
import { Link } from 'react-router-dom'
const { Sider } = Layout

class SideMenu extends React.Component {
  render () {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.sideMenuState}>
        <div className='logo' />
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
          <Menu.Item key='1'>
            <Link to='/'>
              <Icon type='sync' />
              <span>Downloads</span>
            </Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Link to='/settings'>
              <Icon type='setting' />
              <span>Settings</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default SideMenu
