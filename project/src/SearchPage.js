import React, { Component } from 'react';
import './App.css';
import FarmerInformation from './farmerInformation/FarmerInformation'
import { getFarmerById, getAmountOfFarmers } from './farmerInformation/Farmers'
import FarmerBox from './farmerBox/FarmerBox'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { List } from 'react-virtualized';
import SearchField from "react-search-field"

class SearchPage extends Component {
    constructor() {
        super()
        this.state = { farmerInformation: false, farmerID: 0, search: "" }
    }
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


    filterFarmers() {
        const list = getAmountOfFarmers().map(index => <FarmerBox farmer={getFarmerById(index)} onClick={() => this.clickedOpenFarmerInformation(index)} />)
        const newList = [];

        if (this.state.search === "") {
            return list;
        }

        list.forEach(element => {
            if (element.props.farmer.name.toLowerCase().includes(this.state.search.toLowerCase())) {
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
        //Calls reRender when the window's size is changed
        var self = this;
        window.onresize = function (event) {
            self.reRender()
        };

        return (
            <Container fluid={true}>
                <SearchField
                    placeholder="Sök bondgård"
                    onChange={(value) => this.onChangeBound(value)}
                />
                <Row noGutters={true}>
                    <Col xs={"auto"}>
                        <List
                            width={window.innerWidth * 0.4}
                            height={window.innerHeight - 25}
                            rowCount={this.filterFarmers().length}
                            rowHeight={window.innerHeight / 3.5}
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



export default SearchPage;

