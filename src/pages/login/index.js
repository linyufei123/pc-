import React, { Component } from "react"
import './login.css'
import { Form, Input, Button, Checkbox } from 'antd'
import {connect} from "react-redux"
import { mapStateToProps, mapDispatchToProps } from './conncet'

class Login extends Component {

    render() {
        return (
            <div className="login_bg">
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish.bind(this)}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ pattern:/^\w{5,18}/, required: true, message: '请正确输入账号' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{pattern:/^\d{6}$/, required: true, message: '请输入密码' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item  name="remember" valuePropName="checked">
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
    //提交登录
    onFinish({...rest}){
        this.props.handleLogin(rest)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)