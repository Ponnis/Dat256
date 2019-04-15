import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConfirmationBox from './ConfirmationBox'
import testPurchases from './TestPurchases'
import FarmerInformation from './farmerInformation/FarmerInformation'
import { getFarmerById } from './farmerInformation/Farmers'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FarmerInformation farmer={getFarmerById(0)} />
      </div>
    );
  }
}

export default App;
