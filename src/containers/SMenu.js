import { connect } from 'react-redux'
import SideMenu from '../components/SideMenu'

const mapStateToProps = state => ({
  sideMenuState: state.frontend
})

const SMenu = connect(mapStateToProps, null)(SideMenu)

export default SMenu
