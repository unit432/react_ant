import React from 'react'
import 'antd/dist/antd.css'
import './App.css'
import { Layout, Menu, Icon } from 'antd'
const { Header, Sider, Content } = Layout

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render () {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div>
            <Icon
              className='trigger'
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </div>
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key='1'>
              <Icon type='sync' />
              <span>Running</span>
            </Menu.Item>
            <Menu.Item key='2'>
              <Icon type='check' />
              <span>Downloaded</span>
            </Menu.Item>
            <Menu.Item key='3'>
              <Icon type='upload' />
              <span>Upload</span>
            </Menu.Item>
            <Menu.Item>
              <Icon type='setting' />
              <span>Setting</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className='trigger'
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280
            }}
          >
            List
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default App
