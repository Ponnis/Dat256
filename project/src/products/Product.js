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
        <Provider store={this.props.store}>
          <AddCartButton addLabel	= "Lägg till" styles={{ backgroundColor: 'rgb(24, 124, 54)', color: 'white', border:'1px solid black' }} product={{
            id: this.props.item.sku,
            name: this.props.item.name,
            price: this.props.item.price,
          }} />
        </Provider>
      </div >
    );
  }

}
export default ShoppingItem;