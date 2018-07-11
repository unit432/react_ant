import React from 'react'
import { Icon, Row, Progress, Tag, List} from 'antd'
import { formatSpeed, getFileName, formatBytes } from '../lib/utils'
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
    const estimatedTime = props.totalLength / props.downloadSpeed
    var btName, fileName, dlName

    if (props.bittorrent) {
      btName = props.bittorrent.info && props.bittorrent.info.name
    }

    if (props.files) {
      dlName = props.files[0] && getFileName(props.files[0].path)
    }

    fileName = btName || dlName || 'Unknown'

    return (
      <ListItem actions={ [<ControlButtons />] }>
        <Meta
          title={fileName}
          description={
            <Row>
              <Tag color="#87d068"><IconText type="play-circle" text={props.status} /></Tag>
              <Tag><IconText type="arrow-down" text={formatSpeed(props.downloadSpeed)} /></Tag>
              <Tag><IconText type="arrow-up" text={formatSpeed(props.uploadSpeed)} /></Tag>
              <Tag><IconText type="dashboard" text={estimatedTime} /></Tag>
              <Tag><IconText type="cloud-download" text={formatBytes(props.totalLength)} /></Tag>
              <Tag><IconText type="download" text={formatBytes(props.completedLength)} /></Tag>
              <Tag><IconText type="upload" text={formatBytes(props.uploadLength)} /></Tag>
              <Tag><IconText type="swap" text={String(uploadRatio)} /></Tag>
              <Tag><IconText type="right" text={percent + '%'} /></Tag>
            </Row>
          }
        />
        <Progress size="small" percent={percent} />
      </ListItem>
    )
  }
}

export default DownloadJob
