import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConfirmationBox from './confirmationBox/ConfirmationBox.js'

// Test Data API
import testPurchases from './TestPurchases'
import FarmerInformation from './farmerInformation/FarmerInformation'
import { getFarmerById } from './farmerInformation/Farmers'
import ShoppingItem from './products/Product'
import CreateAccPage from './AccountPage/CreateAccPage'
import ShoppingCartdud from './shoppingCart/ShoppingCartdud';
import Header from "./Header";
import MainView from "./MainView";
import SimpleWizard from './checkout/SimpleWizard';
import Login from './login/Login';



class App extends Component {
  constructor(){
    super()
    this.state={
        products: testPurchases, 
        clicked: false, 
        mainView:"home",
    }
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

  changeView=(view)=>{
      this.setState({
          mainView:view
      })
  }



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
        <FarmerInformation farmer={getFarmerById(0)} buyClick={this.clickedBuy} />
        {cBox}
        <ShoppingCartdud/>
        <CreateAccPage/>
        */

    return (
      <div className="App">
          <Header changeView={this.changeView} view={this.state.mainView}/>
          <MainView view={this.state.mainView}/>
          <SimpleWizard/>
          <Login/>
      </div>
    );
  }
}


export default App;

