import React from "react";
import './FarmerInformation.css';

class FarmerInformation extends React.Component {
    state = {}
    render() {
        return (
            <div className="FarmerInformation">
                <img src={require('../farmerInformation/images/exampleFarm.jpg')} />
                <div>{this.props.name}</div>
            </div>
        );
    }
}


export default FarmerInformation;