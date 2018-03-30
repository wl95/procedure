import React, { Fragment, Component } from 'react';
import PropTypes, { func } from 'prop-types'
import {createPortal} from 'react-dom'
let domNode = document.getElementById('content');

function Content(props) {
    return createPortal(
        props.children,
        domNode,
    );
}

class Button extends Component{
    render() {
        return (
            <button onMouseEnter={() => this.props.MouseEnter(this.props.itme)} onMouseLeave={() => {this.props.onOff()}}  style={{ background: this.props.color,width:"60px","marginLeft":'10px',color:"#fff"}}>
                {this.props.children}
            </button>
        )
    }
}

class Tab extends Component {
    constructor(){
        super()
        this.state = {
            content: "啊哈哈哈",
            flag:false
        }
        this.MouseEnter = this.MouseEnter.bind(this);
        this.onOff = this.onOff.bind(this);
    }
    MouseEnter(content) {
        this.setState({
            content,
            flag:true
        })
    }
    onOff() {
        this.setState({
            flag:false
        })
    }
    render() {
        let {list} = this.props;
        return (
            <Fragment>
                {
                    list.map(value => {
                        return <Button key={value.id} MouseEnter={this.MouseEnter} onOff={this.onOff} itme={value.content} color={value.color}>{value.text}</Button>
                    })
                }
                {
                    this.state.flag &&  <Content>{
                        this.state.content
                    }</Content>
                }
            </Fragment>
        )
    }
}

export default Tab;