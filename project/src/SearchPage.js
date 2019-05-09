import React, { Component } from 'react';
import './App.css';
import FarmerInformation from './farmerInformation/FarmerInformation'
import { getFarmerById, getAmountOfFarmers } from './farmerInformation/Farmers'
import FarmerBox from './farmerBox/FarmerBox'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { List } from 'react-virtualized'
import SearchField from 'react-search-field'
import Filter from './filterBox/Filter'
import './SearchPage.css';
import _ from 'lodash';

class SearchPage extends Component {
    constructor() {
        super()
        this.state = { farmerInformation: false, farmerID: 0, search: "", filter: [] }
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

    categoryFilter(category, catState) {
        let filteredCat = this.state.filter;
        if (catState) {
            filteredCat.push(category);
        } else {
            filteredCat = _.pull(filteredCat, category)
        }
        this.setState({
            filter: filteredCat
        });
    }

    filterFarmers() {
        const list = getAmountOfFarmers().map(index => <FarmerBox farmer={getFarmerById(index)} onClick={() => this.clickedOpenFarmerInformation(index)} />)
        const newList = [];

        list.forEach(element => {
            if (element.props.farmer.name.toLowerCase().includes(this.state.search.toLowerCase())) {
                if (this.state.filter.length === 0) {
                    newList.push(element);
                } else if (_.difference(this.state.filter, element.props.farmer.types).length === 0) {
                    newList.push(element);
                }
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
                <Row noGutters={true}>
                    <Col xs={"auto"}>
                        <Filter
                            onClick={(category, number) => this.categoryFilter(category, number)}
                        ></Filter>
                    </Col>
                    <Col xs={"auto"}>
                        <SearchField classNames='SearchField'
                            placeholder="Sök bondgård"
                            onChange={(value) => this.onChangeBound(value)}
                        />
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
