import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux'

let hintStyle = {
    width: "400px",
    height: "200px",
    border:'1px solid #ccc'
}

class Hint extends Component{
    render() {
        let { children } = this.props;
        return (
            <div style={hintStyle}>
                { children }
            </div>    
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hint);