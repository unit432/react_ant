import React from 'react'
import { Layout } from 'antd'
const { Content } = Layout

class Panel extends React.Component {
  render(){
    return(
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
    )
  }
}

export default Panel
