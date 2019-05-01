import React from "react";
import './FarmerBox.css'

class FarmerBox extends React.Component {
    state = {}
    render() {
        return (
            <div className="FarmerBox" onClick = {this.props.onClick}>
                <div className="FarmerName">
                    {this.props.farmer.name}
                </div>
                <div className="DistanceInfo">
                    {this.props.farmer.distance} km
                </div>
                <div className="IconBox">{this.props.farmer.types.map(t => 
                    <img src={require('../farmerInformation/images/icons/' + t.type + '.png')} className="Icon"/>)
                }
                </div>
                <div className="Description">
                    {this.props.farmer.description}
                </div>
            </div>
        );
    }
}


export default FarmerBox;