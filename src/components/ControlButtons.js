import React from "react";
import { Button, Icon } from "antd";
const ButtonGroup = Button.Group;

class ControlButtons extends React.Component {
  render() {
    return (
      <div>
        <ButtonGroup>
          <Icon
            type={
              this.props.jobStatus !== "active"
                ? "play-circle-o"
                : "pause-circle-o"
            }
          />
          <Icon type="delete" />
          <Icon type="setting" />
        </ButtonGroup>
      </div>
    );
  }
}

export default ControlButtons;
