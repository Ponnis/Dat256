import React from "react"
import './ConfirmationBox.css';
import './CloseIconPage.js';
import CloseIconPage from "./CloseIconPage.js";
class ConfirmationBox extends React.Component {
    render() {
        const products = this.props.products.map(product => <h1>You purchased {product.amount} {product.item} from {product.producer}</h1>);
        return( 
        <div className= "ConfirmationBox">
            <div className="CloseIconPage"><CloseIconPage callback={this.props.click}/></div>
            {products}
        </div>
        )
    }
}
export default ConfirmationBox