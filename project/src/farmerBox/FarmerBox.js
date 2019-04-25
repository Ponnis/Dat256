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
                <div className="Description">
                    {this.props.farmer.description}
                </div>
            </div>
        );
    }
}


export default FarmerBox;