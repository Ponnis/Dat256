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
import SearchField from "react-search-field"

class App extends Component {
  constructor() {
    super()
    this.state = { products: testPurchases, clicked: false, farmerInformation: false, farmerID: 0,search: "" }
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

  //Updates render()
  reRender = () => {
    this.setState({ state: this.state })
  };


  filterFarmers(){
    const list = [
      <FarmerBox farmer={getFarmerById(0)} onClick={() => this.clickedOpenFarmerInformation(0)} />,
      <FarmerBox farmer={getFarmerById(1)} onClick={() => this.clickedOpenFarmerInformation(1)} />
    ];
    const newList = [];
    if(this.state.search == ""){
      return list;
    }

      list.forEach(element => {
          if(element.props.farmer.name.toLowerCase().includes(this.state.search.toLowerCase())){
            newList.push(element);
          }
      });
      return newList;
  }

  onChangeBound(value) {
    this.setState({
      search: value,
    });
  }

  rowRenderer = ({ index }) => { 
    return (this.filterFarmers()[index]) 
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
    //Calls reRender when the window's size is changed
    var self = this;
    window.onresize = function(event) {
      self.reRender()
    };

    return (
      <Container fluid={true}>
        <SearchField
          placeholder="Sök bondgård"
          onChange = {(value) => this.onChangeBound(value)}
        />
        <div>{this.state.search}</div>
        <Row noGutters={true}>
          <Col xs={"auto"}>
         <List
            width={window.innerWidth*0.4}
            height={window.innerHeight/2}
            rowCount={this.filterFarmers().length}
            rowHeight={window.innerHeight/2}
            rowRenderer={this.rowRenderer}
          />
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

