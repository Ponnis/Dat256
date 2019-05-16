/* global google */

import React from "react";
import ReactDOM from 'react-dom';
import "./home.css";
import Geosuggest from 'react-geosuggest';

class HomePage extends React.Component{
    constructor(){
        super()
    }
    
    search=()=>{
        this.props.search("search")
    }

    render(){
        //Constant with suggestions for autocomplete
        const fixtures = [
            {label: 'Göteborg', location: {lat: 57.70716, lng: 11.96679}},
            {label: 'Gibraltargatan', location: {lat: 57.685510, lng: 11.983820}},
            {label: 'Pilbågsgatan', location: {lat: 58.140410, lng: 12.132520}},
            {label: 'Bergsprängaregatan', location: {lat: 57.685600, lng: 11.987150}},
            {label: 'Hörsalsvägen', location: {lat: 57.688438, lng: 11.979350}},
            {label: 'Avenyn', location: {lat: 57.701950, lng: 11.972550}},
            {label: 'Lindholmsallén', location: {lat: 57.710310, lng: 11.941450}},
            {label: 'Mölndalsvägen', location: {lat: 57.680840, lng: 12.002390}}
          ];
        return(
            <div className={"home-container"}>
                <h2>Skriv din adress här för att hitta gårdar nära dig:</h2>
                <div><input className={"input-field"} type="text"/>
                <div>
                <Geosuggest
                    fixtures={fixtures}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    onSuggestSelect={this.onSuggestSelect}
                    onSuggestNoResults={this.onSuggestNoResults}
                    location={new google.maps.LatLng(57.70716, 11.96679)}
                    radius="20"
                    queryDelay={0}
                    maxFixtures={3}
                    />
                    <button onClick={()=>this._geoSuggest.selectSuggest()}>Hitta produkter nära dig!</button>
                </div>
                <button onClick={this.search} className={"SearchButton"}>sök</button>
                </div>
            </div>
        )
    }
}

export default HomePage