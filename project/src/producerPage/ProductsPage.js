import React from "react"
import "./producerPage.css"
import ProducerProduct from "./ProducerProduct"

class ProductsPage extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className={"ProductsContainer"}>
            Antal Varunamn Pris
            <ProducerProduct itemName={"Potatis"}/>   
            <ProducerProduct itemName={"Lök"}/>   
            </div>
        )

    }
}

export default ProductsPage