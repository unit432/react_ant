import React from "react";
import { Tabs } from "antd";

const TabPane = Tabs.TabPane;

class JobForm extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="URIs" key="1">
          Content of URI form
        </TabPane>
        <TabPane tab="Torrents" key="2">
          Content of Torrent form
        </TabPane>
      </Tabs>
    );
  }
}

export default JobForm;
