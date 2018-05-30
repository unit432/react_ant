import React from 'react'
import { Row, Progress, Col } from 'antd'
import ControlButtons from './ControlButtons'

class DownloadJob extends React.Component {
  render () {
    return (
      <div>
        <Row>
          <Col>{this.props.fileName}</Col>
          <Col><ControlButtons /></Col>
        </Row>
        <Row>
          <Col>{this.props.status}</Col>
          <Col>{this.props.downloadSpeed}</Col>
          <Col>{this.props.uploadSpeed}</Col>
          <Col>Time Estimate</Col>
          <Col>{this.props.totalLength}</Col>
          <Col>{this.props.completedLength}</Col>
          <Col>{this.props.uploadLength}</Col>
          <Col>D/U Ratio</Col>
          <Col>Percent</Col>
        </Row>
        <Row><Progress precent={30} /></Row>
      </div>
    )
  }
}

export default DownloadJob
