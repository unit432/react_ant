import React from "react";
import { Layout, Icon, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;
const MenuItem = Menu.Item;

class TopHead extends React.Component {
  render() {
    return (
      <Header style={{ background: "#fff", padding: 0 }}>
        <Menu mode="horizontal">
          <MenuItem>
            <Icon
              type={this.props.showSideMenu ? "menu-unfold" : "menu-fold"}
              onClick={this.props.toggleSideMenu}
            />
          </MenuItem>
          <MenuItem>
            <Link to="/job-form">
              <Icon type="file-add" />
            </Link>
          </MenuItem>
          <MenuItem>
            <Icon type="pause-circle-o" />
          </MenuItem>
          <MenuItem>
            <Icon type="delete" />
          </MenuItem>
        </Menu>
      </Header>
    );
  }
}

export default TopHead;
