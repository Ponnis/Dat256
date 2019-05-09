import React from "react";
import './FarmerBox.css'

class FarmerBox extends React.Component {
    state = {}

    convertRating(rating){
        switch (rating) {
            case 1:
            return 'one'
            case 2:
            return 'two'
            case 3:
            return 'three'
            case 4:
            return 'four'
            case 5:
            return 'five'
            default:
            return 'one'
        }
    }
    render() {
        return (
            <div className="FarmerBox" onClick={this.props.onClick}>
                <img src={require('../farmerInformation/images/stars/' + this.convertRating(this.props.farmer.rating) + '.png')} className="Stars" />
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