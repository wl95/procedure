import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import { white, yellow500, blue500 } from 'material-ui/styles/colors';
import {
    HashRouter,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';

const iconStyles = {
    marginRight: 10,
    width: 30,
    height: 30,
    color: 'white',
    marginTop: 10
};
const titleStyles = {
    fontWeight: 'normal',
    fontSize: 20
};

class Title extends React.Component{
    render() {
        return (
            <div style={{ display: 'flex',fontSize:'16px',justifyContent: 'space-between',padding: '0 40px'}}>
                <span>听</span>
                <span>看</span>
                <span>唱</span>
            </div>
        )
    }
} 

class Header extends React.Component{
    constructor() {
        super()
        this.state = {open: false};
    }
    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({ open: false });
    LeftIconButtonClick =()=> {
        this.setState({open: !this.state.open})
    }
    RightIconButtonClick = () => {
        location.replace("#/seachInner");
    }
    render() {
        return (
            <div>
                <AppBar
                    onLeftIconButtonClick={this.LeftIconButtonClick}
                    title={<Title />}
                    titleStyle={titleStyles}
                    iconElementRight={<ActionSearch style={iconStyles}/>}
                    onRightIconButtonClick={this.RightIconButtonClick}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem>
                        <NavLink to="/login">登录/注册</NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/installment">installment</NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/multilevelMenu">multilevelMenu</NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/shopcar">shopcar</NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/context">contextTab</NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/reduxtab">reduxTab</NavLink>
                    </MenuItem>
                </Drawer>
            </div>    
        )
    }
}


export default Header;
