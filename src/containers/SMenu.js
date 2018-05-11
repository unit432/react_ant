import { connect } from 'react-redux'
import SideMenu from '../components/SideMenu'

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => ({
  sideMenuState: state
})

const SMenu = connect(mapStateToProps, mapDispatchToProps)(SideMenu)

export default SMenu
