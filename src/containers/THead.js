import { connect } from 'react-redux'
import { toggleSideMenu } from '../actions'
import TopHead from '../components/TopHead'

const mapDispatchToProps = dispatch => ({
  toggleSideMenu: () => dispatch(toggleSideMenu)
})

const mapStateToProps = dispatch => ({
  show_side_menu: state
})

const THead = connect(null, mapDispatchToProps)(TopHead)

export default THead
