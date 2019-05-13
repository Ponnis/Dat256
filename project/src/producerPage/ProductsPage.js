import React from "react"
import "./producerPage.css"
import ProducerProduct from "./ProducerProduct"
import Farmers from "../farmerInformation/Farmers"

class ProductsPage extends React.Component{
    constructor(){
        super()
        this.state={
            products: [
                <ProducerProduct/>
            ]
        }
    }

    addProduct =()=>{
        let tempArr = this.state.products.slice()
        console.log(tempArr)
        tempArr.push(<ProducerProduct/>)
        this.setState({
            products: tempArr

        })

    }

    render(){
        let products = this.state.products

        return(
            <div className={"ProductsContainer"}>
           <div className={"ProductHeadings"}><h6>Antal (st)</h6><h6>Varunamn</h6><h6>Pris (SEK)</h6></div>
                {products}
            <button className={"AddButton"} onClick={this.addProduct}>Lägg till vara</button>
            
            </div>
        )

    }
}

export default ProductsPage