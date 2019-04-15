import React, { Component } from 'react';
//import logo from './logo.svg';
import tomato from './tomato.jpg';
import egg from './egg.jpg';
import './App.css'

class ShoppingItem extends Component{
    constructor(props){
      super(props);
      this.state={
        clicks: 0,
        show: true,
      };
      this.vars={
        name:'GenericName',
        price:'xx$'
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
    render(){
      return(
        <div>
        {this.state.show ?<h2>{this.state.clicks}</h2>:''}
        <button onClick={this.DecreaseItem}>-</button>
        <button>köp</button>
        <button onClick={this.IncrementItem}>+</button>
        
       </div>
      );
    }
    
  }
  export default ShoppingItem;