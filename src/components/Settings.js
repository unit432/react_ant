import React from "react";
import { Tabs, Form, Input, Button } from "antd";

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class Settings extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.updateGlobalOption(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Tabs defaultActaiveKey="1">
          <TabPane tab="Aria2 PRC" key="1">
            <Form layout="inline" onSubmit={this.handleSubmit}>
              <FormItem label="Host">
                {getFieldDecorator("host", {
                  rules: [
                    { required: true, message: "Host address is required!" }
                  ]
                })(<Input addonBefore="Http(s)://" />)}
              </FormItem>
              <FormItem label="Port">
                {getFieldDecorator("port", {
                  rules: [{ required: true, message: "Port is required!" }]
                })(<Input />)}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit">
                  Update Configuration
                </Button>
              </FormItem>
            </Form>
          </TabPane>
          <TabPane tab="Aria2 Global" key="2">
            Aria2 Global
          </TabPane>
          <TabPane tab="About" key="3">
            About
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Settings;
