import { connect } from 'react-redux' 
import { toggleSideMenu } from '../actions'
import TopHead from '../components/TopHead'

const mapDispatchToProps = dispatch => ({
  toggleSideMenu: () => dispatch(toggleSideMenu)
})

const mapStateToProps = state => ({ })

const THead = connect(mapStateToProps, mapDispatchToProps)(TopHead)

export default THead
