import React from "react";
import './FarmerInformation.css';
import ShoppingItem from '../products/Product.js'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { List } from 'react-virtualized';

/**
 * Information box about a farmer.
 * The box contains a picture, name, distance as well as a short description. 
 */


class FarmerInformation extends React.Component {
    state = {}

    informationList(){
    return [<img src={require('../farmerInformation/images/' + this.props.farmer.id + '.jpg')} className="Pictures"/>,
    <div className="FarmerName">
        {this.props.farmer.name}
    </div>,
    <div className="DistanceInfo">
        {this.props.farmer.distance} km
    </div>,
    <div className="Description">
        {this.props.farmer.description}
    </div>,
    this.props.farmer.products.map(product => <ShoppingItem item={product} store={this.props.store}></ShoppingItem>)
    ];
    }

    rowRenderer = ({ index }) => { 
        return (this.informationList()[index]) 
    };

    render() {
        return (
            <div className="FarmerInformation">
            <button type="button" class="close" aria-label="Close" onClick = {this.props.onClose}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <List
                    width={window.innerWidth*0.4}
                    height={window.innerHeight-70}
                    rowCount={15}
                    rowHeight={window.innerHeight/10}
                    rowRenderer={this.rowRenderer}
                    data={this.informationList()}
                />
            </div>
        );
    }
}


export default FarmerInformation;