import React from "react";
import './FarmerInformation.css';

class FarmerInformation extends React.Component {
    state = {}
    render() {
        return (
            <div className="FarmerInformation">
                <img src={require('../farmerInformation/images/exampleFarm.jpg')} className="Pictures"/>
                <div className="FarmerName">
                    {this.props.name}
                </div>
                <div className="DistanceInfo">
                    {this.props.distance}
                </div>
                <button className = "Button" onClick = {() => alert("Tack för ditt köp!")}>
                KÖP
                </button>
            </div>
        );
    }
}


export default FarmerInformation;