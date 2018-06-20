import React from 'react'
import { Row, Progress, Col } from 'antd'
import ControlButtons from './ControlButtons'

class DownloadJob extends React.Component {
  render () {
    const props = this.props
    const percent = Number((props.completedLength * 100 / props.totalLength).toFixed(2))
    const uploadRatio = Number((props.uploadLength/props.completedLength).toFixed(2))

    return (
      <div>
        <Row>
          <Col>{props.fileName}</Col>
          <Col><ControlButtons /></Col>
        </Row>
        <Row>
          <Col>{props.status}</Col>
          <Col>{props.downloadSpeed}</Col>
          <Col>{props.uploadSpeed}</Col>
          <Col>Time Estimate</Col>
          <Col>{props.totalLength}</Col>
          <Col>{props.completedLength}</Col>
          <Col>{props.uploadLength}</Col>
          <Col>{String(uploadRatio)}</Col>
          <Col>{percent}%</Col>
        </Row>
        <Row><Progress percent={percent} /></Row>
      </div>
    )
  }
}

export default DownloadJob
