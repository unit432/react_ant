import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import './SideMenu.css'
const { Sider } = Layout

class SideMenu extends React.Component {
  render () {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.sideMenuState}>
        <div className='logo' />
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
          <Menu.Item key='1'>
            <Icon type='sync' />
            <span>Downloads</span>
          </Menu.Item>
          <Menu.Item key='2'>
            <Icon type='setting' />
            <span>Settings</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default SideMenu
