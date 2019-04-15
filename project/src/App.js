import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConfirmationBox from './ConfirmationBox'
// Test Data API
import testPurchases from './TestPurchases'
import FarmerInformation from './farmerInformation/FarmerInformation'
import { getFarmerById } from './farmerInformation/Farmers'
import ShoppingItem from './Product'

class App extends Component {
  constructor(){
    super()
    this.state={products: testPurchases, clicked: false}
  }

  //Called when Buy Button is clicked, shows confirm-box
  clickedBuy =()=>{
      this.setState({
          clicked: true
      })
  };

  //Called when "X" is pressed in confirm-box
  clickedClosed=()=>{
      this.setState({
          clicked: false
      })
  };



  render() {

      // Renders cBox depending on state
      let cBox = (<div></div>);
      if(this.state.clicked){
          cBox = (<ConfirmationBox products={this.state.products} click={this.clickedClosed}/>)
      }
      else{
          cBox = (<div>Click to show you purchases...</div>)
      }

    return (
      <div className="App">
          <ShoppingItem></ShoppingItem>
          <ShoppingItem></ShoppingItem>
          <button onClick={this.clickedBuy}>Buy</button>
          {cBox}
        <FarmerInformation farmer={getFarmerById(1)} />
      </div>
    );
  }
}


export default App;

