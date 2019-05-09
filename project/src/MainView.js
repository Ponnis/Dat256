import React from "react"
import CreateAccPage from "./AccountPage/CreateAccPage";
import TestAccounts from "./AccountPage/TestAccounts";
import HomePage from "./homePage/HomePage";
import SearchPage from "./SearchPage";

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
    }

    render(){

        let page;
        if(this.props.view ==="home"){
            page = <HomePage search={this.props.changeView}/>
        }

        if(this.props.view ==="login"){
            page = <CreateAccPage addAccount={this.newAccount}/>
        }
        if(this.props.view ==="search"){
            page = <SearchPage/>
        }
        return(
            <main className={"main-container"}>
                {page}
            </main>
        )
    }

}

export default MainView