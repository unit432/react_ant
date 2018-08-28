import React from "react";
import { Layout, Icon, Tooltip } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

class TopHead extends React.Component {
  render() {
    return (
      <Header style={{ background: "#fff", padding: 0 }}>
        <span className="topIconSpan">
          <Icon
            className="topIcon"
            type={this.props.showSideMenu ? "menu-unfold" : "menu-fold"}
            onClick={this.props.toggleSideMenu}
          />
        </span>
        <span className="topIconSpan">
          <Tooltip placement="top" title="Start">
            <Link to="/job-form">
              <Icon className="topIcon" type="file-add" />
            </Link>
          </Tooltip>
        </span>
        <span className="topIconSpan">
          <Tooltip placement="top" title="Pause">
            <Icon className="topIcon" type="pause-circle-o" />
          </Tooltip>
        </span>
        <span className="topIconSpan">
          <Tooltip placement="top" title="Delete">
            <Icon className="topIcon" type="delete" />
          </Tooltip>
        </span>
      </Header>
    );
  }
}

export default TopHead;
