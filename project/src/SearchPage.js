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
import { Cart } from 'react-cart-components'
import { Provider } from "react-redux";

class SearchPage extends Component {
    constructor() {
        super()
        this.state = { farmerInformation: false, farmerID: 0, search: "", categoryFilter: [], minRating: 1, minDistance: 50 }
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
    handleCheckout=()=>{
        this.props.search("checkout")
    }
    categoryFilter(category, catState) {
        let filteredCat = this.state.categoryFilter;
        if (catState) {
            filteredCat.push(category);
        } else {
            filteredCat = _.pull(filteredCat, category)
        }
        this.setState({
            categoryFilter: filteredCat
        });
    }

    ratingFilter(rating) {
        this.setState({
            minRating: rating
        });
    }

    distanceFilter(distance) {
        this.setState({
            minDistance: distance,
        });
    }

    filterFarmers() {
        const list = getAmountOfFarmers().map(index => <FarmerBox farmer={getFarmerById(index)} onClick={() => this.clickedOpenFarmerInformation(index)} />)
        const newList = [];

        list.forEach(element => {
            if (element.props.farmer.name.toLowerCase().includes(this.state.search.toLowerCase())) {
                if (element.props.farmer.distance <= this.state.minDistance) {
                    if (element.props.farmer.rating >= this.state.minRating) {
                        if (this.state.categoryFilter.length === 0) {
                            newList.push(element);
                        } else if (_.difference(this.state.categoryFilter, element.props.farmer.types).length === 0) {
                            newList.push(element);
                        }
                    }
                }
            }
        });
        return _.sortBy(newList,[function(element){return element.props.farmer.distance;}]);
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
            <Provider store={this.props.store}>
                <Container fluid={true}>
                    <Cart currency="SEK"
                        checkoutLabel="Till betalning"
                        currencySymbol="SEK"
                        handleCheckout = {this.handleCheckout}

                    />

                    <Row noGutters={true}>
                        <Col xs={"auto"}>
                            <Filter
                                onCategoryClick={(category, number) => this.categoryFilter(category, number)} onRatingClick={(rating) => this.ratingFilter(rating)} onDistanceClick={(distance) => this.distanceFilter(distance)}>
                            </Filter>
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
                            {this.state.farmerInformation ? <FarmerInformation farmer={getFarmerById(this.state.farmerID)} buyClick={this.clickedBuy} onClose={this.clickedCloseFarmerInformation} store={this.props.store} /> : <div></div>}
                        </Col>
                    </Row>
                </Container>
            </Provider>
        );
    }
}



export default SearchPage;

