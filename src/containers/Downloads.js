import { connect } from "react-redux";
import Downloads from "../components/Downloads";
import { buildAria2Cmd } from "../actions";

const mapStateToProps = state => ({
  jobs: state.downloadJobs
});

const mapDispatchToProps = dispatch => ({
  pause: gid =>
    dispatch(
      buildAria2Cmd({ methodName: "aria2.pause", params: [gid], once: true })
    ),
  start: gid =>
    dispatch(
      buildAria2Cmd({ methodName: "aria2.unpause", params: [gid], once: true })
    ),
  remove: gid =>
    dispatch(
      buildAria2Cmd({ methodName: "aria2.remove", params: [gid], once: true })
    )
});

const DownloadsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Downloads);
export default DownloadsContainer;
