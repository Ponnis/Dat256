import React, { Component } from 'react';
//import logo from './logo.svg';
import tomato from './tomato.jpg';
import './App.css';

class Ppp extends Component {
  constructor(props){
    super(props);
    this.state ={
      clicks:0,
      show: true
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
  
  clicked(){
    var amount=0;
    console.log('Klickeliklick');
    amount++;
  }
  render() {
    
    return (
        
        <div className="App">
        <button onClick ={this.IncrementItem}>+</button>
        <button onClick ={this.DecreaseItem}>-</button>
        <button onClick ={this.ConfirmPurchase}>KÖP</button>
        <img src={tomato} className="Tomato-logo"></img>
       
        {this.state.show ? <h2>{this.state.clicks}</h2>:''}
        
        <variable onClick ={this.clicked}>tomater</variable>
        <p></p>
        <header className="App-header">
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default Ppp;

