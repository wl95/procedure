import React, { Fragment, Component } from 'react';
import { createPortal } from 'react-dom'
import { connect } from 'react-redux'
import { TAB_LIST } from '../../store/actions'
import Button from './button'
import Hint from './hint'
let domNode = document.getElementById('content');

// 将内容通过插槽的形式添加进content盒子
class Content extends Component{
    render() {
        return createPortal(this.props.children,domNode)
    }
}

class ReduxTab extends Component{
    constructor() {
        super()
    }
    componentDidMount() {
        this.props.content();
    }
    render() {
        let { tabList, msg , flag } = this.props;
        return (
            <Fragment>
                {
                    tabList && tabList.map(value => {
                        return <Button item={value.content} key={value.id}>{value.text}</Button>
                    })
                }    
                {
                    flag ? <Content><Hint>{msg}</Hint></Content> : ''
                }
            </Fragment>    
        )
    }
}

function mapStateToProps(state) {
    return {
        tabList: state.tabList,
        msg: state.msg,
        flag:state.flag
    }
}

function mapDispatchToProps(dispatch) {
    return {
        content: () => {    
            fetch('/data/tabDate.json').then(res => res.json()).then(result => {
                dispatch({
                    type:TAB_LIST,
                    data:result
                })
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxTab);