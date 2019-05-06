import React from "react";
import "./home.css";

class HomePage extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className={"home-container"}>
                <h2>Skriv din adress här för att hitta gårdar nära dig:</h2>
                <div><input className={"input-field"} type="text"/>
                <button className={"SearchButton"}>sök</button>
                </div>
            </div>
        )
    }
}

export default HomePage