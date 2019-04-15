import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConfirmationBox from './ConfirmationBox'
import testPurchases from './TestPurchases'

class App extends Component {
  constructor(){
    super()
    this.state={products: testPurchases, clicked: false}
  }

  clickedBuy =()=>{
      this.setState({
          clicked: true
      })
  };

  clickedClosed=()=>{
      this.setState({
          clicked: false
      })
  };



  render() {

      let cBox = (<div></div>);

      if(this.state.clicked){
          cBox = (<ConfirmationBox products={this.state.products} click={this.clickedClosed}/>)
      }
      else{
          cBox = (<div>Click to show you purchases...</div>)
      }

    return (
      <div className="App">
          <button onClick={this.clickedBuy}>Buy</button>

          {cBox}
      </div>
    );
  }
}

export default App;
