import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/lib/button/style';
import 'antd/lib/icon/style';
import 'antd/lib/input/style';
import 'antd/lib/checkbox/style';
import 'antd/lib/form/style';
import './register.css'
import { NavLink } from 'react-router-dom';
const FormItem = Form.Item;

const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
    fontSize: '12px',
};
const formItemConfirm = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
    fontSize: '12px',
};
function onSubmit() {
  console.log(1)
}
class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <Form onSubmit={this.handleSubmit} layout={'horizontal'} className="login-form">
            <FormItem  {...formItemLayout} label="用户名:" >
            {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入您的用户名!' }],
            })(
                <Input placeholder="I'm the content" id="success" placeholder="请输入您的用户名" />
            )}
            </FormItem>
            <FormItem
                {...formItemLayout} label="密码:"
            >
                {getFieldDecorator('password', {
                rules: [{
                    required: true, message: '请输入密码!',
                }, {
                    validator: this.checkConfirm,
                }],
                })(
                    <Input type="password" placeholder="6-16位字母/数字/符号"/>
                )}
            </FormItem>
            <FormItem
                {...formItemConfirm} label="确认密码:"
            >
                {getFieldDecorator('confirm', {
                rules: [{
                    required: true, message: '请再次输入密码!',
                }, {
                    validator: this.checkPassword,
                }],
                })(
                    <Input type="password" onBlur={this.handleConfirmBlur} placeholder="请输入再次密码"/>
                )}
            </FormItem>
            <FormItem>
            <div className="submitBtn">  
            <Button type="primary"  htmlType="submit" className="login-form-button">
                注册
            </Button>
            </div>  
            <NavLink to="/login" style={{float:'right',paddingRight:'10px'}}>已有账号点击登录</NavLink>
            </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;