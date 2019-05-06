import React from "react"
import CreateAccPage from "./AccountPage/CreateAccPage";

class MainView extends React.Component{

    constructor(){
        super()
        this.state={
            currentView:"home"
        }
    }

    render(){
        return(
            <main className={"main-container"}>
                <div>Home Page!</div>
            </main>
        )
    }

}

export default MainView