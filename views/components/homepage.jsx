import React from 'react';
import Header from './header'
import '../font/iconfont.css'
import Footer from './footer'
export default class DrawerUndockedExample extends React.Component {
  render() {
    return (
      <div className="home_wrap">
        <Header />  
        <Footer /> 
      </div>
    );
  }
}