import React from "react";
import './FarmerBox.css'

/**
 * The component with a short description of the farmer.
 * Several instances of the component is displayed in a scroll pane in search page.
 */
class FarmerBox extends React.Component {
    state = {}

    //Converts rating from number to string (used for images)
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
            //The component (box) containing all information about the farmer.
            <div className="FarmerBox" onClick={this.props.onClick}>
                {/* The rating (amount of stars, shown as image) */ }
                <img src={require('../farmerInformation/images/stars/' + this.convertRating(this.props.farmer.rating) + '.png')} className="Stars" alt="" />
                <div className="FarmerName">
                    {this.props.farmer.name}
                </div>
                <div className="DistanceInfo">
                    {this.props.farmer.distance} km
                </div>
                {/* Maps the types of produce the farmer sells and shows the icons for the types. */}
                <div className="IconBox">{this.props.farmer.types.map(type =>
                    <img src={require('../farmerInformation/images/icons/' + type + '.png')} className="Icon" alt=""/>)
                }
                </div>
                <div className="Descriptions">
                    {this.props.farmer.description}
                </div>
            </div>
        );
    }
}


export default FarmerBox;