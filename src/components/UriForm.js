import React from "react";
import { Form, Input, Button } from "antd";
import { Redirect } from "react-router";

const { TextArea } = Input;
const FormItem = Form.Item;

class UriJobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobSubmitted: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err && values.uris) {
        var uris = values.uris.split("\n");
        for (var element of uris) {
          this.props.addUris([element]);
        }
        this.setState({ jobSubmitted: true });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    if (this.state.jobSubmitted) {
      return <Redirect to="/" />;
    }

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
