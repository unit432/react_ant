import { connect } from "react-redux";
import { toggleSideMenu, toggleAddJobForm } from "../actions";
import TopHead from "../components/TopHead";

const mapDispatchToProps = dispatch => ({
  toggleSideMenu: () => dispatch(toggleSideMenu),
  toggleAddJobForm: () => dispatch(toggleAddJobForm)
});

const mapStateToProps = state => ({
  showSideMenu: state.frontend.hideSideMenu,
  showAddJobForm: state.frontend.showAddJobForm
});

const THead = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopHead);

export default THead;
