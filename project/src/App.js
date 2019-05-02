import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import ConfirmationBox from './confirmationBox/ConfirmationBox'
=======
import ConfirmationBox from './confirmationBox/ConfirmationBox.js'
>>>>>>> createAccount
// Test Data API
import testPurchases from './TestPurchases'
import FarmerInformation from './farmerInformation/FarmerInformation'
import { getFarmerById } from './farmerInformation/Farmers'
<<<<<<< HEAD

=======
import ShoppingItem from './products/Product'
import CreateAccPage from './AccountPage/CreateAccPage'
>>>>>>> createAccount

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
          cBox = (<div></div>)
      }
      /*
        <FarmerInformation farmer={getFarmerById(0)} buyClick={this.clickedBuy} />*/

    return (
      <div className="App">
          {cBox}

          <CreateAccPage/>
      </div>
    );
  }
}


export default App;

