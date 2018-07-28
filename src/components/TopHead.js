import React from "react";
import JobForm from "./JobForm";
import { Layout, Icon, Menu, Modal, Button } from "antd";

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
            <Icon type="file-add" />
          </MenuItem>
          <MenuItem>
            <Icon type="pause-circle-o" />
          </MenuItem>
          <MenuItem>
            <Icon type="delete" />
          </MenuItem>
        </Menu>
        <Modal
          title="Add URIs"
          visible={this.props.showAddJobForm}
          onOk={this.test}
          onCancel={this.toggleAddJobForm}
        >
          <JobForm />
        </Modal>
      </Header>
    );
  }
}

export default TopHead;
