import React from "react";
import { Form, Input, Button } from "antd";

const { TextArea } = Input;
const FormItem = Form.Item;

class UriJobForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err && values.uris) {
        var uris = values.uris.split("\n");
        for (var element of uris) {
          this.props.addUris([element]);
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator("uris", {})(<TextArea rows={11} />)}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const UriForm = Form.create()(UriJobForm);
export default UriForm;
