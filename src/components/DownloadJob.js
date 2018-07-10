import React from 'react'
import { Row, Progress, Tag, List} from 'antd'
import { getFileName } from '../lib/utils'
import ControlButtons from './ControlButtons'
const ListItem = List.Item
const { Meta } = List.Item

class DownloadJob extends React.Component {

  render () {
    const props = this.props
    const percent = Number((props.completedLength * 100 / props.totalLength).toFixed(2))
    const uploadRatio = Number((props.uploadLength/props.completedLength).toFixed(2))

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
              <Tag color="#87d068">{props.status}</Tag>
              <Tag>{props.downloadSpeed}</Tag>
              <Tag>{props.uploadSpeed}</Tag>
              <Tag>Time Estimate</Tag>
              <Tag>{props.totalLength}</Tag>
              <Tag>{props.completedLength}</Tag>
              <Tag>{props.uploadLength}</Tag>
              <Tag>{String(uploadRatio)}</Tag>
              <Tag>{percent}%</Tag>
            </Row>
          }
        />
        <Progress percent={percent} />
      </ListItem>
    )
  }
}

export default DownloadJob
