import React, { Component } from 'react';
import './App.css'



class ShoppingItem extends Component{
    constructor(props){
      super(props);
      this.state={
        clicks: 0,
        show: true,
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
        {this.props.item.name}
        {this.props.item.price}
        <button onClick={this.DecreaseItem}>-</button>
        <button>köp</button>
        <button onClick={this.IncrementItem}>+</button>
        
       </div>
      );
    }
    
  }
  export default ShoppingItem;