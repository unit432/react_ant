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
        <Row>
          <Col>Status</Col>
          <Col>Download Speed</Col>
          <Col>Upload Speed</Col>
          <Col>Time Estimate</Col>
          <Col>File Size</Col>
          <Col>Downloaded Size</Col>
          <Col>Uploaded Size</Col>
          <Col>D/U Ratio</Col>
          <Col>Percent</Col>
        </Row>
        <Row><Progress precent={30} /></Row>
      </div>
    )
  }
}

export default DownloadJob
