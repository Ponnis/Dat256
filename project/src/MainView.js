import React from "react"
import CreateAccPage from "./AccountPage/CreateAccPage";
import {getAccounts} from "./AccountPage/TestAccounts";
import HomePage from "./homePage/HomePage";
import SearchPage from "./SearchPage";
import ProducerPage from "./producerPage/ProducerPage"

import { getNewID, addFarmer } from "./farmerInformation/Farmers"
import MasterForm from "./checkout/MasterForm";


class MainView extends React.Component{

    constructor(){
        super()
        this.state={
            accounts:getAccounts(),
            checkoutProducts: null
        }
    }

    newAccount=(account)=>{
        let accounts = this.state.accounts;
        console.log(accounts)
        accounts.push(account);
        this.setState({
            accounts: accounts
        })
        console.log("Account added")
        console.log(JSON.stringify(this.state.accounts))
        this.createNewFarmer(account)
    }

    createNewFarmer(account){

        //let newID = getNewID()
        let name = account.companyName
        console.log(account.companyName)

        let newFarmer =
            {id:account.id,
            name:name,
            distance: 5, rating:1,
            types:[
                "milk"
            ],
            description:"En Ny Gård",
            products:[
                { "name": "Mjölk", "price": 12,"sku":"3-2" }
            ],
            };
        console.log(JSON.stringify(newFarmer))
        addFarmer(newFarmer)
    }

    checkout=(products)=>{
        this.setState({
            checkoutProducts: products
        })
        this.props.changeView("checkout")
    }

    render(){

        let page;
        if(this.props.view ==="home"){
            page = <HomePage search={this.props.changeView}/>
        }

        if(this.props.view ==="producer"){
            page = <ProducerPage loggedIn={this.props.loggedIn}/>
        }

        if(this.props.view ==="login"){
            page = <div>
                <CreateAccPage addAccount={this.newAccount} search={this.props.changeView}/>
                     </div>
        }
        if(this.props.view ==="search"){
            page = <SearchPage store={this.props.store} search={this.props.changeView} checkout={this.checkout}/>
        }
        if(this.props.view ==="checkout"){
            page = <MasterForm search={this.props.changeView} products={this.state.checkoutProducts}></MasterForm>
        }
        return(
            <main className={"main-container"}>
                {page}
            </main>
        )
    }

}

export default MainView