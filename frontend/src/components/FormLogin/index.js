/**
 * FormLogin is the component responsable per validation and send form event 
 * 
 * @version 0.0.1
 * @author Fe Oliveira<fe.get@outlook.com>
 */

import React  from 'react';
import { Form, Icon, Input, Button } from 'antd';

class FormLogin extends React.Component {

  /**
   * Contructor
   */
  constructor( props )
  {

    super();

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  hasErrors( fields_error )
  {
    return Object.keys(fields_error).some( field => fields_error[field] );
  }

  /**
   * Send form
   * 
   * @param {Obj<event>} e
   */
  handleSubmit( e )
  {

    e.preventDefault();

    let { funcAuth } = this.props;

    this.props.form.validateFields((err, values) => {
      if (!err) {
        funcAuth( values.username, values.password );
      }
    });

  };

  render() {

    let { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    let usernameError = isFieldTouched('username') && getFieldError('username');
    let passwordError = isFieldTouched('password') && getFieldError('password');

    return (
      <div data-component="form-login">

        <Form layout="inline" onSubmit={this.handleSubmit}>

          <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
            {
              getFieldDecorator('username', {
                rules: [
                  { required: true, message: 'Please input your E-mail!' }, 
                  { type: 'email',  message: 'The input is not valid E-mail!' }
                ],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="e-mail"
                />,
              )
            }
          </Form.Item>

          <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
            {
              getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )
            }
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" disabled={this.hasErrors(getFieldsError())}>
              Log in
            </Button>
          </Form.Item>

        </Form>

      </div>
    );
  }
}

export default Form.create()(FormLogin);