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
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { List } from 'react-virtualized';

class App extends Component {
  constructor() {
    super()
    this.state = { products: testPurchases, clicked: false, farmerInformation: false, farmerID: 0 }
  }

  //Called when Buy Button is clicked, shows confirm-box
  clickedBuy = () => {
    this.setState({
      clicked: true
    })
  };

  //Called when "X" is pressed in confirm-box
  clickedClosed = () => {
    this.setState({
      clicked: false
    })
  };

  //Farmer state gets updated
  clickedOpenFarmerInformation(id) {
    this.setState({
      farmerID: id,
      farmerInformation: true
    });
  };

  //Farmer state gets updated
  clickedCloseFarmerInformation = () => {
    this.setState({
      farmerInformation: false
    })
  };


  render() {

    // Renders cBox depending on state
    let cBox = (<div></div>);
    if (this.state.clicked) {
      cBox = (<ConfirmationBox products={this.state.products} click={this.clickedClosed} />)
    }
    else {
      cBox = (<div></div>)
    }

    const list = [
      <FarmerBox farmer={getFarmerById(0)} onClick={() => this.clickedOpenFarmerInformation(0)} />,
      <FarmerBox farmer={getFarmerById(1)} onClick={() => this.clickedOpenFarmerInformation(1)} />
    ];

    function rowRenderer ({index}) {return (list[index])}

    let w = (this.props.width);
    return (
      <Container fluid={true}>
        <Row noGutters={true}>
          <Col xs={"auto"}>
         <List
    width={550}
    height={300}
    rowCount={list.length}
    rowHeight={200}
    rowRenderer={rowRenderer}
  />,
          </Col>
          <Col xs={"auto"}>
            {this.state.farmerInformation ? <FarmerInformation farmer={getFarmerById(this.state.farmerID)} buyClick={this.clickedBuy} onClose={this.clickedCloseFarmerInformation} /> : <div></div>}
          </Col>
        </Row>
      </Container>
    );
  }
}


export default App;

