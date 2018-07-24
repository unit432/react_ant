import React from "react";
import { Layout, Icon } from "antd";
const { Header } = Layout;

class TopHead extends React.Component {
  render() {
    return (
      <Header style={{ background: "#fff", padding: 0 }}>
        <Icon
          className="trigger"
          type={this.props.show_side_menu ? "menu-unfold" : "menu-fold"}
          onClick={this.props.toggleSideMenu}
        />
        <Icon className="trigger" type="file-add" />
        <Icon className="trigger" type="pause-circle-o" />
        <Icon className="trigger" type="delete" />
      </Header>
    );
  }
}

export default TopHead;
