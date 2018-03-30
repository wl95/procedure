import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux'
import { TAB_LIST , TAB_MSG , TAB_FLAG } from '../../store/actions'
class Button extends Component{
    constructor() {
        super()
    }
    render() {
        let { MouseEnter, item, children, MouseLeave } = this.props;
        console.log(this.props)
        return (
            <button onMouseEnter={() => {MouseEnter(item)}} onMouseLeave={() => {MouseLeave()}} style={{ background: this.props.color,width:"60px","marginLeft":'10px',color:"#fff"}}>
                {children}
            </button>
        )
    }
}
function mapStateToProps(state) {
    return {
        
    }
}

function mapDispatchToProps(dispatch) {
    return {
        MouseEnter:(msg) => {
            dispatch({
                type: TAB_MSG,
                msg:msg
            })
            dispatch({
                type: TAB_FLAG,
                flag:true
            })
        },
        MouseLeave: () => {
            dispatch({
                type: TAB_FLAG,
                flag:false
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);