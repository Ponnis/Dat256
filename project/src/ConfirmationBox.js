import React from "react"
import './ConfirmationBox.css';
class ConfirmationBox extends React.Component {
    render() {
        const products = this.props.products.map(product => <h1>You purchased {product.amount} {product.item} from {product.producer}</h1>);
        return( 
        <div className= "ConfirmationBox">
            {products}
        </div>
        )
    }
}
export default ConfirmationBox