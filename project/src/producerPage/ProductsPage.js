import React from "react"
import "./producerPage.css"
import ProducerProduct from "./ProducerProduct"
import { getFarmerById, getAmountOfFarmers } from '../farmerInformation/Farmers'

class ProductsPage extends React.Component{
    constructor(){
        super()
        this.state={
            products: [
                <ProducerProduct/>
            ],
        };
    }

    convertProducts=()=>{
        let farmer = getFarmerById(0)
        let a = farmer.products.map(product => <ProducerProduct/>);
        let b = [
            <ProducerProduct/>
        ]
        this.setState({
            products: b,
            test:"bör funka"
        });
    }

    addProduct =()=>{
        let tempArr = this.state.products.slice()
        console.log(tempArr)
        tempArr.push(<ProducerProduct/>)
        this.setState({
            products: tempArr

        })

        let farmer = getFarmerById(0)
        farmer.products.push(<ProducerProduct/>)

    }

    changeProduct=(sku,value)=>{
        let farmer = getFarmerById(0)
        let a = farmer.products.find( product => product.sku === sku );
        a.name = value;

    }

    render(){
        let farmer = getFarmerById(0)
        let a = farmer.products.map(product => <ProducerProduct product={product} changeProduct={this.changeProduct}/>);
        let products = a


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