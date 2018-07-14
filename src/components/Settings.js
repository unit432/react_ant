import React from 'react'
import { Form, Select, Input, Button } from 'antd'

const FormItem = Form.Item
const Option = Select.Option

class Settings extends React.Component {
  render () {
    return (
      <div>
        <h1>Settings</h1>
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
      </div>
    )
  }
}

export default Settings
