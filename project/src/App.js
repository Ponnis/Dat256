import React, { Component } from 'react';
//import logo from './logo.svg';
import tomato from './tomato.jpg';
import egg from './egg.jpg';
import './App.css'
import Product from './Product'


class Ppp extends Component {
  constructor(props){
    super(props);
    
  }
  render() {
    
    return (
       
        <div className="App">
         <Product></Product>
         <Product></Product>
         <Product></Product>
         <Product></Product>
         <Product></Product>
         <Product></Product>
        <p></p>
      </div>
    );
  }
}


export default Ppp;

