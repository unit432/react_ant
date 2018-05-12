import { connect } from 'react-redux'
import { toggleSideMenu } from '../actions'
import TopHead from '../components/TopHead'

const mapDispatchToProps = dispatch => ({
  toggleSideMenu: () => dispatch(toggleSideMenu)
})

const THead = connect(null, mapDispatchToProps)(TopHead)

export default THead
