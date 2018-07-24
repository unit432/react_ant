import React from "react";
import { Card, List } from "antd";
import DownloadJob from "./DownloadJob";

class Downloads extends React.Component {
  render() {
    return (
      <Card bordered={false}>
        <List
          size="large"
          itemLayout="vertical"
          bordered={false}
          dataSource={this.props.jobs}
          locale={{ emptyText: "No Download" }}
          renderItem={item => (
            <DownloadJob
              {...item}
              pause={this.props.pause}
              remove={this.props.remove}
              start={this.props.start}
            />
          )}
        />
      </Card>
    );
  }
}

export default Downloads;
