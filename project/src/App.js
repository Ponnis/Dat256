import React, { Component } from 'react';
//import logo from './logo.svg';
import tomato from './tomato.jpg';
import './App.css';

class ShoppingItem extends Component{
  constructor(props){
    super(props);
    
    this.state={
      clicks: 0,
      show: true,
    };
    this.vars={
      src:tomato
    };
    
  }
  IncrementItem =()=>{
    this.setState({clicks:this.state.clicks +1});
  }
  DecreaseItem =()=>{
    this.setState({clicks:this.state.clicks -1});
  }
  ConfirmPurchase =()=>{
    //TODO
  }
  SetSrc =(src)=>{
    this.setState(this.vars.src=src);
  }
  render(){
    return(
      <div>
      <button onClick={this.DecreaseItem}>-</button>
      <img src={this.vars.src} alt={"kulk"} className="Tomato-logo"></img>
      <button onClick={this.IncrementItem}>+</button>
      {this.state.show ?<h2>{this.state.clicks}</h2>:''}
      <button>köp</button>
     </div>
    );
  }
  
}

class Ppp extends Component {
  constructor(props){
    super(props);
    
  }
  render() {
    
    return (
       
        <div className="App">
         <ShoppingItem></ShoppingItem>
        <p></p>
        <header className="App-header">
          Rubrikjävl
        </header>
      </div>
    );
  }
}


export default Ppp;

