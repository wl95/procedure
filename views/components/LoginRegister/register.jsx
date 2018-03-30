
import React, { Component } from 'react';
import './login.css'
import { Tabs, Tab } from 'material-ui/Tabs';  // 导航
import SwipeableViews from 'react-swipeable-views'; 
import RegisterComponents from './registerComponents'
const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    }
};
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
    onActive(a) {
        console.log(a)
    }
    render() {
        return (
            <div className="loginWrap">
                <header style={LoginHeaderStyle} className="Login_head">
                    <i className="iconfont">&#xe69a;</i>
                    <h3>账号注册</h3>
                </header>
                
                
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                <div className="login_section">
                    <RegisterComponents/>
                </div>
                <div style={styles.slide} className="login_section">
                   asdasd
                </div>
                </SwipeableViews>

            </div>
        )
    }
}

export default Login;



