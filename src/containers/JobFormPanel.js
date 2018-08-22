import { connect } from "react-redux";
import JobForm from "../components/JobForm";
import { buildAria2Cmd } from "../actions";

const mapDispatchToProps = dispatch => ({
  addUris: uris =>
    dispatch(
      buildAria2Cmd({ methodName: "aria2.addUri", params: [uris], once: true })
    )
});

const JobFormPanel = connect(
  null,
  mapDispatchToProps
)(JobForm);

export default JobFormPanel;
