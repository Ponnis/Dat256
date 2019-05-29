import React, { Component } from 'react';
import './App.css';
import { Provider } from "react-redux";
import testPurchases from './TestPurchases'
import Header from "./Header";
import MainView from "./MainView";
import configureStore from "./store";


class App extends Component {
    constructor() {
        super()
        this.state = { products: testPurchases, clicked: false, mainView: "home",loggedIn: 0}
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

    changeView = (view,loggedIn) => {
        this.setState({
            mainView: view
        })
        if(loggedIn != null){
            this.setState({
                loggedIn: loggedIn
            })
        }
    }



    render() {
         var store = configureStore();
        return (
            <Provider store={store}>
            <div className="App">
                <Header changeView={this.changeView} view={this.state.mainView} />
                <MainView changeView={this.changeView} view={this.state.mainView} loggedIn={this.state.loggedIn} store={store} />
            </div>
            </Provider>
        );
    }
}



export default App;

