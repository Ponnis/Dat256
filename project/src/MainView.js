import React from "react"
import CreateAccPage from "./AccountPage/CreateAccPage";
import TestAccounts from "./AccountPage/TestAccounts";
import HomePage from "./homePage/HomePage";
import SearchPage from "./SearchPage";
import ProducerPage from "./producerPage/ProducerPage"

import { getNewID, addFarmer } from "./farmerInformation/Farmers"
import MasterForm from "./checkout/MasterForm";


class MainView extends React.Component{

    constructor(){
        super()
        this.state={
            accounts:TestAccounts
        }
    }

    newAccount=(account)=>{
        let accounts = this.state.accounts
        accounts.push(account)
        this.setState({
            accounts: accounts
        })
        console.log("Account added")
        console.log(JSON.stringify(this.state.accounts))
        this.createNewFarmer(account)
    }

    createNewFarmer(account){

        let newID = getNewID()
        let name = account.firstName + "s Varor"
        console.log(account.firstName)

        let newFarmer =
            {id:newID,
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

    render(){

        let page;
        if(this.props.view ==="home"){
            page = <HomePage search={this.props.changeView}/>
        }

        if(this.props.view ==="producer"){
            page = <ProducerPage />
        }

        if(this.props.view ==="login"){
            page = <div>
                <CreateAccPage addAccount={this.newAccount}/>
                     </div>
        }
        if(this.props.view ==="search"){
            page = <SearchPage store={this.props.store}/>
        }
        if(this.props.view ==="checkout"){
            page = <MasterForm></MasterForm>
        }
        return(
            <main className={"main-container"}>
                {page}
            </main>
        )
    }

}

export default MainView