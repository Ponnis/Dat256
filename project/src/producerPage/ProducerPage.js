import React from "react"
import "./producerPage.css"
import ProductsPage from "./ProductsPage.js"

class ProducerPage extends React.Component{
    constructor(){
        super()
        this.state={navPage: "products"}
    }
    //sets which page should be displayed depending on which button in the navbar is clicked
    navigate=(e)=>{
        console.log(e.target.id)
        this.setState({navPage: e.target.id})
    }

    
    render(){

        let navPage;
        if(this.state.navPage ==="products"){
            navPage = <ProductsPage test={25}/>
        }
        if(this.state.navPage ==="statistics"){
            navPage = <div>Statistiksida (todo)</div>
        }
        if (this.state.navPage ==="deliveries"){
            navPage = <div>Leveranssida (todo)</div>
        }
        if (this.state.navPage ==="orders"){
            navPage = <div>Beställningar (todo)</div>
        }
        if (this.state.navPage ==="information"){
            navPage = <div>Din Information (todo)</div>
        }

        return(
            <div className={"Page"}>
                <nav className={"NavBar"}>
                    <button className={"Tabs"} id="products" onClick={this.navigate}>Produkter</button>
                    <button className={"Tabs"} id="statistics" onClick={this.navigate}>Statistik</button>
                    <button className={"Tabs"} id="orders" onClick={this.navigate}>Beställningar</button>
                    <button className={"Tabs"} id="deliveries" onClick={this.navigate}>Leveranser</button>
                    <button className={"Tabs"} id="information" onClick={this.navigate}>Information</button>
                </nav>
                <div>
                {navPage}
                </div>
            </div>
        )

    }
}

export default ProducerPage