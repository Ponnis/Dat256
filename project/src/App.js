import React, { Component } from 'react';
import './App.css';
import { Provider } from "react-redux";
import testPurchases from './TestPurchases'
import Header from "./Header";
import MainView from "./MainView";
import configureStore from "./store";
import {Helmet} from "react-helmet";


class App extends Component {
    constructor() {
        super()
        this.state = { products: testPurchases, clicked: false, mainView: "home" }
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
         var store = configureStore();

        return (
            <Provider store={store}>
            <Helmet>
                <script
                    src="https://maps.googleapis.com/maps/api/js?libraries=places&key=">
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

