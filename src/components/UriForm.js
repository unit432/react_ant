import React from "react";
import { Form, Input, Button } from "antd";

const { TextArea } = Input;
const FormItem = Form.Item;

class UriForm extends React.Component {
  render() {
    return (
      <Form>
        <FormItem>
          <TextArea rows={11} />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default UriForm;
