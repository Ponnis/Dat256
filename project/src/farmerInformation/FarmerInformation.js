import React from "react";
import './FarmerInformation.css';

class FarmerInformation extends React.Component {
    state = {}
    render() {
        return (
            <div className="FarmerInformation">
                <img src={require('../farmerInformation/images/exampleFarm.jpg')} className="Pictures"/>
                <div className="FarmerName">
                    {this.props.farmer.name}
                </div>
                <div className="DistanceInfo">
                    {this.props.farmer.distance} km
                </div>
                <button className = "Button" onClick = {() => alert("Tack för ditt köp!")}>
                KÖP
                </button>
            </div>
        );
    }
}


export default FarmerInformation;