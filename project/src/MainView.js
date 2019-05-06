import React from "react"
import CreateAccPage from "./AccountPage/CreateAccPage";
import TestAccounts from "./AccountPage/TestAccounts";

class MainView extends React.Component{

    constructor(){
        super()
        this.state={
            currentView:"home",
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
        return(
            <main className={"main-container"}>
                <div>Home Page!</div>
                <CreateAccPage addAccount={this.newAccount}/>
            </main>
        )
    }

}

export default MainView