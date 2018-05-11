import React from 'react'
import { Layout, Icon } from 'antd'
const { Header } = Layout

class TopHead extends React.Component {
  render () {
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <Icon
          className='trigger'
          type={true ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.toggleSideMenu}
        />
      </Header>
    )
  }
}

export default TopHead
