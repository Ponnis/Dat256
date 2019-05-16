import React from "react"
import "./producerPage.css"

class ProducerProduct extends React.Component{
    constructor(){
        super()
    }
  
    handleChange=(e)=>{
        
      this.props.onUserInput(this.props.sku, e.target.name, e.target.value)
      e.preventDefault()
    }

    render(){



        return(
            <div className={"ProductItem"}>
            <div className={"ItemAmount"}><input name="amount"onChange={this.handleChange} value={this.props.product.amount} min={0} max={1000} type="number"/></div>
                <div className={"ItemName"}><input name="name" value={this.props.product.name} onChange={this.handleChange} type="text"/></div>
            <div className={"ItemPrice"}><input name="price" onChange={this.handleChange} value={this.props.product.price} min={0} max={1000} type="number"/></div>   
            </div>
        )

    }
}
export default ProducerProduct