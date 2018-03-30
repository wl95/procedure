import React, { Component } from 'react';

import { createStore } from 'redux';

function counter(state = 0, action) {
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'remove':
            return state - 1;
        default:
            return state;
    }
}

let style = {
    width: '40px'
}
// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }
let store = createStore(counter);

class ShopCar extends Component{

    constructor(){
        super();
        this.state = {
            num:0
        }
        this.addRemoeve = this.addRemoeve.bind(this);
    }
    addRemoeve(e) {
        if (e.target.innerText=='+') {
            store.dispatch({
                type: 'add',
            });
        } else {
            store.dispatch({
                type: 'remove',
            });
        }
        // 可以手动订阅更新，也可以事件绑定到视图层。
        store.subscribe(() => {
            this.setState({
                num:store.getState()
            })
        });
    }
    render() {
        

        return (
            <div>
                <button style={style} onClick={this.addRemoeve}>-</button>    
                <span>{this.state.num}</span>
                <button style={style} onClick={this.addRemoeve}>+</button>    
            </div>
        )
    }
}

export default ShopCar;