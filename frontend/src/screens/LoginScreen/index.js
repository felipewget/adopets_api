import React,
       { Component }  from 'react';

import { Form, Icon, Input, Button } from 'antd';

/**
 *  Tela de busca por um pet
 */
class LoginScreen extends Component {

    constructor()
    {

        super();
        this.state = {};

    }

    componentDidMount() {
    // To disable submit button at the beginning.
    this.props.form.validateFields();
    }

    hasErrors(fieldsError) {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };

      render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = Form;
    
        // Only show error after a field is touched.
        const usernameError = null;// isFieldTouched('username') && getFieldError('username');
        const passwordError = null;// isFieldTouched('password') && getFieldError('password');
        return (
          <Form layout="inline" onSubmit={this.handleSubmit}>
            <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" disabled={this.hasErrors(getFieldsError())}>
                Log in
              </Button>
            </Form.Item>
          </Form>
        );
      }

}

export default LoginScreen;