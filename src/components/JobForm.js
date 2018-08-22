import React from "react";
import { Tabs } from "antd";
import UriForm from "./UriForm";

const TabPane = Tabs.TabPane;

class JobForm extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="URIs" key="1">
          <UriForm addUris={this.props.addUris} />
        </TabPane>
        <TabPane tab="Torrents" key="2">
          Content of Torrent form
        </TabPane>
      </Tabs>
    );
  }
}

export default JobForm;
