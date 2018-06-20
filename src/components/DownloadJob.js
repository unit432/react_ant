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
          <Col span={3} >{props.status}</Col>
          <Col span={3} >{props.downloadSpeed}</Col>
          <Col span={3} >{props.uploadSpeed}</Col>
          <Col span={3} >Time Estimate</Col>
          <Col span={3} >{props.totalLength}</Col>
          <Col span={3} >{props.completedLength}</Col>
          <Col span={2} >{props.uploadLength}</Col>
          <Col span={2} >{String(uploadRatio)}</Col>
          <Col span={2} >{percent}%</Col>
        </Row>
        <Row><Progress percent={percent} /></Row>
      </div>
    )
  }
}

export default DownloadJob
