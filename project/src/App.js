import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConfirmationBox from './ConfirmationBox'
import testPurchases from './TestPurchases'
import FarmerInformation from './farmerInformation/FarmerInformation'
import farmers from './farmerInformation/Farmers'

class App extends Component {
  constructor(){
    super()
    this.state={farmer: farmers}
  }
  render() {
    return (
      <div className="App">
        <FarmerInformation farmer={this.state.farmer} />
      </div>
    );
  }
}

export default App;
