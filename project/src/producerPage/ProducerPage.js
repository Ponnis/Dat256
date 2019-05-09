import React from "react"
import "./producerPage.css"
import ProductsPage from "./ProductsPage.js"

class ProducerPage extends React.Component{
    constructor(){
        super()
        this.state={navPage: "products"}
    }

    navigate=(e)=>{
        console.log(e.target.id)
        this.setState({navPage: e.target.id})
    }

    
    render(){

        let navPage;
        if(this.state.navPage ==="products"){
            navPage = <ProductsPage/>
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

        return(
            <div>
                <nav className={"NavBar"}><button id="products" onClick={this.navigate}>Produkter</button><button id="statistics" onClick={this.navigate}>Statistik</button><button id="orders" onClick={this.navigate}>Beställningar</button><button id="deliveries" onClick={this.navigate}>Leveranser</button></nav>

                <div>
                {navPage}
                </div>
            </div>
        )

    }
}

export default ProducerPage