import React, { Component } from 'react';
import './login.css'
import { Tabs } from 'antd'; // 导航
import 'antd/lib/tabs/style';
import LoginCompinents from './loginCompinents'
import { Link } from 'react-router-dom';
const TabPane = Tabs.TabPane;

const LoginHeaderStyle = {
    width: '100%',
    height: '55px',
    fontSize: '20px',
    lineHeight:'55px'
}

class Login extends React.Component{
    constructor() {
        super()
        this.state = {
            slideIndex: 0,
        };
    }
    handleChange = (value) => {
        this.setState({
            slideIndex: value
        });

    };
    callback(key) {
        console.log(key);
    }
    render() {
        return (
            <div className="loginWrap">
                <header style={LoginHeaderStyle} className="Login_head">
                    <Link className="Login_head_left" to="/HomePage">
                        <i className="iconfont">&#xe69a;</i>
                        <h3>登陆</h3>
                    </Link>    
                    
                </header>
                
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="账号登陆" key="1" className="AccountLogin"><LoginCompinents /></TabPane>
                    <TabPane tab="短信登陆" key="2">手机登陆暂不支持</TabPane>
                </Tabs>
            </div>
        )
    }
}

export default Login;