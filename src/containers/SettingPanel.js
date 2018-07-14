import { connect } from 'react-redux'
import Settings from '../components/Settings'

const mapStateToProps = state => ({
  aira2Options: state.globalOption
})

const SettingPanel = connect(mapStateToProps, null)(Settings)

export default SettingPanel
