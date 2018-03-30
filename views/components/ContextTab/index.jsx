import React, { Compontent, Fragment, Component } from 'react';
import PropTypes from 'prop-types'
import Tab from './tab'

class Button extends Component{
    render() {
        //console.log(this.context.bg  , 'Button')
        return (
            <button style={{width:"60px","marginLeft":'10px',color:"#fff"}}>
                {this.props.children}
            </button>
        )
    }
}

Button.contextTypes = {
    bg:PropTypes.array.isRequired
}

class Message extends Component{
    constructor() {
        super()
    }
    static contextTypes = {
        bg:PropTypes.array.isRequired
    }
    render() {
        return (
            <Fragment>
                {
                    this.context.bg.map(value => {
                        return <div style={{ width: "190px", height: "50px", lineHeight:"50px" }} key={value.id}>{value.text}<Button>Delete</Button></div>
                    })
                }    
                <Tab list={this.context.bg}/>
            </Fragment>
        )
    }
}

class MessageList extends Component{
    getChildContext() {
        return {
            bg: [{
                id:1,
                color: "red",
                text: "别戳我",
                content:"啊哈哈哈"
            }, {
                id:2,    
                color: "orange",
                text: "别动我",
                content:"哇哈哈哈"    
            }, {
                id:3,    
                color: "blue",
                text: "别点我",
                content:"嘻哈哈哈"     
            }]
        }
    }
    render() {
        return (
            <Fragment>
                <Message style={{ width:"300px"}}/>
            </Fragment>    
        )
    }
}

MessageList.childContextTypes = {
    bg:PropTypes.array.isRequired
}

export default MessageList;