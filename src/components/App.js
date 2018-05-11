import React from 'react'
import 'antd/dist/antd.css'
import SMenu from '../containers/SMenu'
import THead from '../containers/THead'
import Panel from './Panel'
import { Layout } from 'antd'

class App extends React.Component {
  render () {
    return (
      <Layout>
        <SMenu />
        <Layout>
          <THead />
          <Panel />
        </Layout>
      </Layout>
    )
  }
}

export default App
