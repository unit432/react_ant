import React from 'react'
import { Row, Progress, Col } from 'antd'

class DownloadJob extends React.Component {
  render () {
    return (
      <div>
        <Row>
          <Col>FileName</Col>
          <Col>ControlMenu</Col>
        </Row>
        <Row><Progress precent={30} /></Row>
      </div>
    )
  }
}

export default DownloadJob
