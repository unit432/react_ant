import React from 'react'
import { Layout } from 'antd'
import Downloads from './Downloads'
import Settings from './Settings'
import { Route } from 'react-router-dom'
const { Content } = Layout

class Panel extends React.Component {
  render () {
    return (
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          background: '#fff',
          minHeight: 280
        }}
      >
        <Route exact path="/" component={Downloads} />
        <Route path="/settings" component={Settings} />
      </Content>
    )
  }
}

export default Panel
