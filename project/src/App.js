import React, { Component } from 'react';
//import logo from './logo.svg';
import tomato from './tomato.jpg';
import egg from './egg.jpg';
import './App.css'
import ShoppingItem from './Product'


class Ppp extends Component {
  constructor(props){
    super(props);
    
  }
  render() {
    
    return (
       
        <div className="App">
         <ShoppingItem></ShoppingItem>
         <ShoppingItem></ShoppingItem>
        <p></p>
        <header className="App-header">
        
        </header>
      </div>
    );
  }
}


export default Ppp;

