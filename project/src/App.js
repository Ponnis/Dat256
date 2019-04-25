import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConfirmationBox from './ConfirmationBox'
// Test Data API
import testPurchases from './TestPurchases'
import FarmerInformation from './farmerInformation/FarmerInformation'
import { getFarmerById } from './farmerInformation/Farmers'
import ShoppingItem from './Product'
import FarmerBox from './farmerBox/FarmerBox'

class App extends Component {
  constructor(){
    super()
    this.state={products: testPurchases, clicked: false,farmerInformation: false,farmerID: 0}
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

  //Called when Buy Button is clicked, shows confirm-box
  clickedOpenFarmerInformation(id){
    this.setState({
      farmerInformation: true,
      farmerID: id
    })
};

//Called when "X" is pressed in confirm-box
clickedCloseFarmerInformation=()=>{
    this.setState({
      farmerInformation: false
    })
};



  render() {

      // Renders cBox depending on state
      let cBox = (<div></div>);
      if(this.state.clicked){
          cBox = (<ConfirmationBox products={this.state.products} click={this.clickedClosed}/>)
      }
      else{
          cBox = (<div></div>)
      }
 
    return (
      <div className="App">
          {cBox}
        {/*<FarmerInformation farmer={getFarmerById(0)} buyClick={this.clickedBuy} /> */}
        <FarmerBox farmer={getFarmerById(0)} onClick ={() => this.clickedOpenFarmerInformation(0)}/>
        <FarmerBox farmer={getFarmerById(1)} onClick ={() => this.clickedOpenFarmerInformation(1)}/>

      {this.state.farmerInformation ? <FarmerInformation farmer={getFarmerById(this.state.farmerID)} buyClick={this.clickedBuy}/>: <div></div>}
      </div>
      
    );
  }
}


export default App;

