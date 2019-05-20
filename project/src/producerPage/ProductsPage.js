import React from "react"
import "./producerPage.css"
import ProducerProduct from "./ProducerProduct"
import { getFarmerById, getAmountOfFarmers } from '../farmerInformation/Farmers'
import { getNewSKU } from "./tempData"

class ProductsPage extends React.Component{
    constructor(){
        super()
        this.state={
            products: getFarmerById(2).products
        };
    }
    //function to add new products to inventory
    addProduct =()=>{
        let tempArr = this.state.products.slice()
        let sku = "" + getNewSKU()
        let newProduct = {name:"ny vara", price:0, sku:sku}
        tempArr.push(newProduct)
        getFarmerById(2).products = tempArr
        this.setState((prevState)=>({
            products: [...prevState.products, newProduct]
        
        }))
    }
    //get a new SKU for new product
    generateSKU(){
        let a = this.state.genSKU
        let b = ++a
        this.setState({
            genSKU: b
        })
        return a
    }
    //saving updates in inventory array
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
        let products = this.state.products.map(product => <ProducerProduct product={product} onUserInput={this.handleChange} sku={product.sku}/>);


        return(
            //Contains everything regaring the proucts, the container contains teh headings, 
            //all products and a button for adding new products.
            <div className={"ProductsContainer"}>
                <div className={"ProductHeadings"}><h6>Antal (st)</h6><h6>Varunamn</h6><h6>Pris (SEK)</h6></div>
                {products}
                <button className={"AddButton"} onClick={this.addProduct}>Lägg till ny vara</button>
            </div>
        )

    }
}

export default ProductsPage