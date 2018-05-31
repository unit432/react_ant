import React from 'react'
import { Row } from 'antd'
import DownloadJob from './DownloadJob'

class Downloads extends React.Component {
  render () {
    const jobList = this.props.jobs
    let downloadJobs = ''

    if (jobList && jobList.length > 0)
    {
      downloadJobs = this.props.jobs.map(
        (job) => <Row key={job.gid}><DownloadJob {...job}/></Row>
      )
    }
    else
    {
      downloadJobs = <span>No Downloads</span>
    }

    return (
      <div>
        {downloadJobs}
      </div>
    )
  }
}

export default Downloads
