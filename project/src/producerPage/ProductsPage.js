import React from "react"
import "./producerPage.css"
import ProducerProduct from "./ProducerProduct"
import { getFarmerById, getAmountOfFarmers } from '../farmerInformation/Farmers'

class ProductsPage extends React.Component{
    constructor(){
        super()
        this.state={
            products: getFarmerById(2).products,genSKU:0
        };
    }

    addProduct =()=>{
        let tempArr = this.state.products.slice()
        //console.log(tempArr)
        tempArr.push({
            name:"Ny Vara!", price:0,amount:0
        })
        let sku = "" + this.generateSKU()
        this.setState((prevState)=>({
            products: [...prevState.products, {name:"ny vara", price:0, sku:sku}]
        
        }))
    }

    generateSKU(){
        let a = this.state.genSKU
        let b = ++a
        this.setState({
            genSKU: b
        })
        return a
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
        console.log(JSON.stringify(this.state.products))
    }

    render(){
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