import { connect } from 'react-redux'
import Downloads from '../components/Downloads'

const mapStateToProps = state => ({
  jobs: state.downloadJobs
})

const DownloadsContainer = connect(mapStateToProps, null)(Downloads)
export default DownloadsContainer
