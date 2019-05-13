import React from "react"
import './App.css'

class Header extends React.Component{
    constructor(){
        super()
    }

    loginView=()=>{
        this.props.changeView("login")
    }

    homeView=()=>{
        this.props.changeView("home")
    }

    render(){

        let headerButton;

        console.log(this.props.view)
        if(this.props.view ==="home"){
            headerButton = <div onClick={this.loginView} className={"corner-btn"}>Logga in/ skapa konto</div>
        }
        if(this.props.view ==="login"){
            headerButton = <div onClick={this.homeView} className={"corner-btn"}>Hem</div>
        }

        return(
            <div className='header-container'>
                <div className={"logo"} onClick={this.homeView}>
                    <img src={"http://res.freestockphotos.biz/pictures/15/15031-illustration-of-a-carrot-pv.png"}/>
                    <h1>Farmers Market</h1>
                </div>
                {headerButton}

            </div>
        )
    }
}

export default Header