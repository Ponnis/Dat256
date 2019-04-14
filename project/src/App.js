import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConfirmationBox from './ConfirmationBox'
import testPurchases from './TestPurchases'
import FarmerInformation from './farmerInformation/FarmerInformation'

class App extends Component {
  constructor(){
    super()
    this.state={products: testPurchases}
  }
  render() {
    return (
      <div className="App">
        <ConfirmationBox products={this.state.products}/>
        <FarmerInformation name={"hej"}/>
      </div>
    );
  }
}

export default App;
