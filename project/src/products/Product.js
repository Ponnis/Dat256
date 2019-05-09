import React, { Component } from 'react';
import '../App.css'
//import './Product.css'
import configureStore from '../store';
import { Provider } from "react-redux";
import { AddCartButton } from 'react-cart-components'



class ShoppingItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true,
    };

  }
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ConfirmPurchase = () => {
    //TODO
  }
  render() {
    return (
      <div className="ShoppingItem">
        <div className="Item">
          {this.props.item.name}
        </div>
        <div className="Price">
          {this.props.item.price} kr
          </div>
          <Provider store={configureStore()}>
            <AddCartButton/>
             </Provider>
      <div className="Buttons">
        {this.state.show ? <h2>{this.state.clicks}</h2> : ''}
        <button onClick={this.DecreaseItem}>-</button>
        <button>köp</button>
        <button onClick={this.IncrementItem}>+</button>
      </div>
       </div >
      );
  }

}
export default ShoppingItem;