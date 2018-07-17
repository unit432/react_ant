import React from 'react'
import { Tabs, Form, Select, Input, Button } from 'antd'

const FormItem = Form.Item
const Option = Select.Option
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class Settings extends React.Component {
  render () {
    return (
      <div>
        <Tabs defaultActaiveKey="1" onChange={callback}>
          <TabPane tab="Aria2 PRC"    key="1">
            <Form layout="inline">
              <FormItem label="Host">
                <Input addonBefore ="Http(s)://" defaultValue={this.props.aira2Options.host} />
              </FormItem>
              <FormItem label="Port">
                <Input defaultValue={this.props.aira2Options.port} />
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit">Update Configuration</Button>
              </FormItem>
            </Form> 
          </TabPane>
          <TabPane tab="Aria2 Global" key="2">Aria2 Global</TabPane>
          <TabPane tab="About"        key="3">About</TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Settings
