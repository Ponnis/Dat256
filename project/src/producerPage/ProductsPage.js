import React from "react"
import "./producerPage.css"
import ProducerProduct from "./ProducerProduct"
import { getFarmerById, getAmountOfFarmers } from '../farmerInformation/Farmers'

class ProductsPage extends React.Component{
    constructor(){
        super()
        this.state={
            products: getFarmerById(2).products
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
        tempArr.push({
            name:"Ny Vara!", price:0,amount:0
        })
        this.setState({
            products: tempArr
        })
    }
    
    handleChange=(sku, property, value)=>{
        let i = 0
        this.state.products.map(product =>{
            if(product.sku === sku){
                let newArray = this.state.products
                let newPro = product
                newPro[property] = value
                newArray[i] = newPro
                this.setState({
                    products: newArray
                })
            }
            ++i
        })

    }

    render(){
        let farmer = getFarmerById(0)
        let products = this.state.products.map(product => <ProducerProduct product={product} onUserInput={this.handleChange} sku={product.sku}/>);


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