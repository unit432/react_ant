import React from 'react'
import { Icon, Row, Progress, Tag, List} from 'antd'
import { formatSpeed, getFileName, formatTime, formatBytes } from '../lib/utils'
import ControlButtons from './ControlButtons'
const ListItem = List.Item
const { Meta } = List.Item

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
)

class DownloadJob extends React.Component {
  render () {
    const props = this.props
    const percent = Number((props.completedLength * 100 / props.totalLength).toFixed(2))
    const uploadRatio = Number((props.uploadLength/props.completedLength).toFixed(2))
    const estimatedTime = (props.totalLength - props.completedLength) / props.downloadSpeed
    const jobStatus = props.status
    var btName, fileName, dlName

    if (props.bittorrent) {
      btName = props.bittorrent.info && props.bittorrent.info.name
    }

    if (props.files) {
      dlName = props.files[0] && getFileName(props.files[0].path)
    }

    fileName = btName || dlName || 'Unknown'

    var tagColor, jobStatusIcon

    if(jobStatus === 'active') {
      tagColor = 'blue'
      jobStatusIcon = 'play-circle'
    } else if (jobStatus === 'complete') {
      tagColor = 'green'
      jobStatusIcon = 'check-circle'
    } else if (jobStatus === 'error') {
      tagColor = 'red'
      jobStatusIcon = 'close-circle'
    } else if (jobStatus === 'paused') {
      tagColor = 'blue'
      jobStatusIcon = 'pause-circle'
    }else {
      tagColor = 'blue'
      jobStatusIcon = 'paly-circle'
    }

    var tagRow
    if(jobStatus === 'active'){
      tagRow = <Row>
        <Tag color={tagColor}><IconText type={jobStatusIcon} text={jobStatus} /></Tag>
        <Tag color={tagColor}><IconText type="arrow-down" text={formatSpeed(props.downloadSpeed)} /></Tag>
        <Tag color={tagColor}><IconText type="arrow-up" text={formatSpeed(props.uploadSpeed)} /></Tag>
        <Tag color={tagColor}><IconText type="dashboard" text={formatTime(estimatedTime)} /></Tag>
        <Tag color={tagColor}><IconText type="cloud-download" text={formatBytes(props.totalLength)} /></Tag>
        <Tag color={tagColor}><IconText type="download" text={formatBytes(props.completedLength)} /></Tag>
        <Tag color={tagColor}><IconText type="upload" text={formatBytes(props.uploadLength)} /></Tag>
        <Tag color={tagColor}><IconText type="swap" text={String(uploadRatio)} /></Tag>
        <Tag color={tagColor}><IconText type="right" text={percent + '%'} /></Tag>
      </Row>
    }else{
      tagRow = <Row>
        <Tag color={tagColor}><IconText type={jobStatusIcon} text={jobStatus} /></Tag>
        <Tag color={tagColor}><IconText type="cloud-download" text={formatBytes(props.totalLength)} /></Tag>
        <Tag color={tagColor}><IconText type="download" text={formatBytes(props.completedLength)} /></Tag>
        <Tag color={tagColor}><IconText type="right" text={percent + '%'} /></Tag>
      </Row>
    }

    return (
      <ListItem actions={ [<ControlButtons />] }>
        <Meta
          title={fileName}
          description={ tagRow }
        />
        <Progress size="small" percent={percent} />
      </ListItem>
    )
  }
}

export default DownloadJob
