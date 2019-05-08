import React from "react";
import './FarmerBox.css'

class FarmerBox extends React.Component {
    state = {}
    render() {
        return (
            <div className="FarmerBox" onClick={this.props.onClick}>
                <img src={require('../farmerInformation/images/stars/' + this.props.farmer.rating + '.png')} className="Stars" />
                <div className="FarmerName">
                    {this.props.farmer.name}
                </div>
                <div className="DistanceInfo">
                    {this.props.farmer.distance} km
                </div>
                <div className="IconBox">{this.props.farmer.types.map(type =>
                    <img src={require('../farmerInformation/images/icons/' + type + '.png')} className="Icon" />)
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