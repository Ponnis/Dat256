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
           <div className={"ProductHeadings"}><h6>Antal (st)</h6><h6>Varunamn</h6><h6>Pris (SEK)</h6></div>
            <ProducerProduct itemName={"Potatis"}/>   
            <ProducerProduct itemName={"Gul lök"}/>   
            
            </div>
        )

    }
}

export default ProductsPage