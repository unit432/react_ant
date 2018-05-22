import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import './SideMenu.css'
import { Link } from 'react-router-dom'

const { Sider } = Layout

class SideMenu extends React.Component {
  render () {
    return (
      <div>
        <Sider trigger={null} collapsible collapsed={this.props.sideMenuState}>
          <div className='logo' />
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key='1'>
              <Icon type='sync' />
              <span><Link to='/'>Downloads</Link></span>
            </Menu.Item>
            <Menu.Item key='2'>
              <Icon type='setting' />
              <span><Link to='/settings'>Settings</Link></span>
            </Menu.Item>
          </Menu>
        </Sider>
      </div>
    )
  }
}

export default SideMenu
