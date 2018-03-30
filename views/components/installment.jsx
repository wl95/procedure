import React, { Component } from 'react';

class Installment extends React.Component{
    constructor(){
		super()
		this.state={
			deng:"",
			shou:"",
			add:""
        }
		//改变this指向
		this.changeV = this.changeV.bind(this)
		this.changeSet = this.changeSet.bind(this)
	}
	//onChange函数
	changeV(ev){
		let targetValue = ev.target.name;
		this.setState({
			[targetValue]:ev.target.value
		})
	}
	//点击事件  设置本地存储
    changeSet() {
        console.log(this.state)
		for(var key in this.state){
		    localStorage.setItem(key, this.state[key])
		}
	}
	render(){
		return (
			<div>
				<form className="from-inline">
					<label>联系人<input type="text" name="deng" placeholder="请输入联系人" value={this.state.deng} onChange={this.changeV}/></label>
					<label>联系电话<input type="text" name="shou" placeholder="请输入电话号码" value={this.state.shou} onChange={this.changeV}/></label>
					<label>联系地址<input type="text" name="add" placeholder="请输入联系地址" value={this.state.add} onChange={this.changeV}/></label>
				</form>
				<button onClick={this.changeSet}>加入美分期</button>
			</div>
		)
	}
	componentDidMount(){
		//当组件渲染完成时  获取 localStorage 本地存储
		if(localStorage){
			for(var key in localStorage){
			    this.setState({
			    	deng:localStorage.deng,
					shou:localStorage.shou,
					add:localStorage.add
			    })
			}
		}
	}
}

export default Installment;