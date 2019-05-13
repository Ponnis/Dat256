import React from "react"
import "./producerPage.css"
// es6

class ProducerProduct extends React.Component{
    constructor(){
        super()
        this.state = {amount: 0, price: 0}
        this.handleChangeAmount = this.handleChangeAmount.bind(this)
        this.handleChangePrice = this.handleChangePrice.bind(this)

    }

    IncrementItem = () => {
        this.setState({ amount: this.state.amount + 1 });
      }
      DecreaseItem = () => {
          if (this.state.amount>0){
        this.setState({ amount: this.state.amount - 1 });
          }
      }

      IncrementPrice= () => {
        this.setState({ price: this.state.price + 1 });
      }
      DecreasePrice = () => {
          if (this.state.price>0){
        this.setState({ price: this.state.price - 1 });
          }
      }

      handleChangeAmount =(e)=>{
        if (e.target.validity.valid){
          this.setState({amount: e.target.value});
        }
      }

      handleChangePrice =(e)=>{
        this.setState({price: e.target.value});
    }


    render(){
        return(
            <div className={"ProductItem"}>
            <div className={"ItemAmount"}><input onChange={this.handleChangeAmount} value={this.state.amount} min={0} max={1000} type="number"/></div>
            {this.props.itemName}
            <div className={"ItemPrice"}><input onChange={this.handleChangePrice} value={this.state.price} min={0} max={1000} type="number"/></div>   
            </div>
        )

    }
}
//<button onClick={this.DecreaseItem}>-</button>
//<button onClick={this.IncrementItem}>+</button> 
export default ProducerProduct