import React from "./node_modules/react"
import './ConfirmationBox.css';
import '../reusableComponents/CloseIconPage.js';
import CloseIconPage from "../reusableComponents/CloseIconPage.js";

class ConfirmationBox extends React.Component {
    render() {
        //Array of products mapped to elements which is then rendered
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