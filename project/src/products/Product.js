import React, { Component } from './node_modules/react';
import './App.css'
//import './Product.css'



class ShoppingItem extends React.Component{
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
        <div className="ShoppingItem">
          <div className="Item">
            {this.props.item.name}
          </div>
          <div className="Price">
            {this.props.item.price} kr
          </div>
          <div className="Buttons">
            {this.state.show ? <h2>{this.state.clicks}</h2>:''}
            <button onClick={this.DecreaseItem}>-</button>
            <button>köp</button>
            <button onClick={this.IncrementItem}>+</button>
          </div>
       </div>
      );
    }
    
  }
  export default ShoppingItem;