import React from "react"
import "./producerPage.css"
import ProducerProduct from "./ProducerProduct"
import { getFarmerById, getSKU } from '../farmerInformation/Farmers'

class ProductsPage extends React.Component{

    //function to add new products to inventory
    addProduct =()=>{
        let tempArr = this.getProducts().slice()
        let sku = "" + getSKU(parseInt(this.props.loggedIn))
        let newProduct = {name:"ny vara", price:0, sku:sku}
        tempArr.push(newProduct)
        getFarmerById(parseInt(this.props.loggedIn)).products = tempArr
        this.forceUpdate()
    }

    getProducts(){
        const products = getFarmerById(parseInt(this.props.loggedIn)).products;
        return products
    }

    //saving updates in inventory array
    handleChange=(sku, property, value)=>{
        let i = 0
        this.getProducts().forEach(product =>{
            if(product.sku === sku){
                let newArray = this.getProducts
                let newPro = product
                newPro[property] = value
                newArray[i] = newPro
                this.forceUpdate()
            }
            ++i
        });
    }

    render(){
        let products = this.getProducts().map(product => <ProducerProduct product={product} onUserInput={this.handleChange} sku={product.sku}/>);
        return(
            //Contains everything regaring the proucts, the container contains teh headings, 
            //all products and a button for adding new products.
            <div>
                <div className={"ProductHeadings"}>
                    <h6 className={"Heading"} >Antal (st)</h6>
                    <h6 className={"Heading"}> Varunamn</h6>
                    <h6 className={"Heading"} >Pris (SEK)</h6>
                </div>
                {products}
                <button className={"AddButton"} onClick={this.addProduct}>Lägg till ny vara</button>
            </div>
        )
    }
}

export default ProductsPage