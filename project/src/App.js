import React, { Component } from 'react';
import './App.css';
import { Provider } from "react-redux";
import ConfirmationBox from './confirmationBox/ConfirmationBox.js'
// Test Data API
import testPurchases from './TestPurchases'
import Header from "./Header";
import MainView from "./MainView";
import configureStore from "./store";
import {Helmet} from "react-helmet";


class App extends Component {
    constructor() {
        super()
        this.state = { products: testPurchases, clicked: false, mainView: "producer" }
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

    changeView = (view) => {
        this.setState({
            mainView: view
        })
    }



    render() {

        // Renders cBox depending on state
        let cBox = (<div></div>);
        if (this.state.clicked) {
            cBox = (<ConfirmationBox products={this.state.products} click={this.clickedClosed} />)
        }
        else {
            cBox = (<div></div>)
        }
        /*
          <FarmerInformation farmer={getFarmerById(0)} buyClick={this.clickedBuy} />
          {cBox}
          <ShoppingCartdud/>
          <CreateAccPage/>
          */
         var store = configureStore();

        return (
            <Provider store={store}>
            <Helmet>
                <script
                    src="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyDsDauVwD2vwY4WYAwIgamtTWlD_B5By1o">
                    </script>
            </Helmet>
            <div className="App">
                <Header changeView={this.changeView} view={this.state.mainView} />
                <MainView changeView={this.changeView} view={this.state.mainView} store={store} />
            </div>
            </Provider>
        );
    }
}



export default App;

