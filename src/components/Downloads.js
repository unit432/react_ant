import React from 'react'
import { Card, List} from 'antd'
import DownloadJob from './DownloadJob'

class Downloads extends React.Component {
  render () {
    return (
      <Card bordered={false}>
        <List
          size="large"
          bordered={false}
          dataSource={this.props.jobs}
          locale={{emptyText: 'No Download'}}
          renderItem={item => (<DownloadJob {...item} />)}
        >
        </List>
      </Card>
    )
  }
}

export default Downloads
