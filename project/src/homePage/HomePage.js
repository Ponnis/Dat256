import React from "react";
import "./home.css";
import Autocomplete from 'react-google-autocomplete';

class HomePage extends React.Component{
    constructor(){
        super()
    }

    search=()=>{
        this.props.search("search")
    }

    render(){
        return(
            <div className={"home-container"}>
                <h2>Skriv din adress här för att hitta gårdar nära dig:</h2>
                <div><input className={"input-field"} type="text"/>
                <button onClick={this.search} className={"SearchButton"}>sök</button>
                </div>
            </div>
        )
    }
}

export default HomePage