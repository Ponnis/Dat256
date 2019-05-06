import React from "react"

class Header extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className={"header-container"}>
                <div className={"logo"}>
                    <img src={"http://res.freestockphotos.biz/pictures/15/15031-illustration-of-a-carrot-pv.png"}/>
                    <h1>Farmers Market</h1>
                </div>
                <div className={"corner-btn"}>
                    Logga in/ skapa konto
                </div>
            </div>
        )
    }
}

export default Header