import React from "react";
import './FarmerInformation.css';
import ShoppingItem from '../Product.js'

/**
 * Information box about a farmer.
 * The box contains a picture, name, distance as well as a short description. 
 */
class FarmerInformation extends React.Component {
    state = {}
    render() {
        return (
            <div className="FarmerInformation">
                <img src={require('../farmerInformation/images/' + this.props.farmer.id + '.jpg')} className="Pictures"/>
                <div className="FarmerName">
                    {this.props.farmer.name}
                </div>
                <div className="DistanceInfo">
                    {this.props.farmer.distance} km
                </div>
                <div className="Description">
                    {this.props.farmer.description}
                </div>
                {this.props.farmer.products.map(product => <ShoppingItem item={product}></ShoppingItem>)}
                <button className = "Button" onClick = {this.props.buyClick}>
                KÖP
                </button>
            </div>
        );
    }
}


export default FarmerInformation;