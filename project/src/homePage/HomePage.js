import React from "react";
import "./home.css";
import Geosuggest from 'react-geosuggest';

class HomePage extends React.Component{
    constructor(){
        super()
    }

    search=()=>{
        this.props.search("search")
    }

    onSuggestSelect(suggest) {
        alert(suggest);
      }

    render(){
        var fixtures = [
            {label: 'Old Elbe Tunnel, Hamburg', location: {lat: 53.5459, lng: 9.966576}},
            {label: 'Reeperbahn, Hamburg', location: {lat: 53.5495629, lng: 9.9625838}},
            {label: 'Alster, Hamburg', location: {lat: 53.5610398, lng: 10.0259135}}
          ];
        return(
            <div className={"home-container"}>
                <h2>Skriv din adress här för att hitta gårdar nära dig:</h2>
                <div><input className={"input-field"} type="text"/>
                <div>
        <Geosuggest
          ref={el=>this._geoSuggest=el}
          placeholder="Start typing!"
        
          fixtures={fixtures}
          onSuggestSelect={this.onSuggestSelect}
          
          radius="20" />
 
        
        <button onClick={()=>this._geoSuggest.focus()}>Focus</button>
    
        <button onClick={()=>this._geoSuggest.clear()}>Clear</button>
        <button onClick={()=>this._geoSuggest.selectSuggest()}>Search</button>
      </div>
                <button onClick={this.search} className={"SearchButton"}>sök</button>
                </div>
            </div>
        )
    }
}

export default HomePage