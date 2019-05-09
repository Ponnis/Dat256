import React from "react"
import "./producerPage.css"

class ProducerProduct extends React.Component{
    constructor(){
        super()
        this.state = {amount: 0, price: 0}
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
          this.setState({amount: e.target.value});
      }

      handleChangePrice =(e)=>{
        this.setState({price: e.target.value});
    }


    render(){
        return(
            <div className={"ProductItem"}>
            <div className={"ItemInput"}><button onClick={this.DecreaseItem}>-</button><input onChange={this.handleChangeAmount} value={this.state.amount} type="number"/><button onClick={this.IncrementItem}>+</button> </div>
            {this.props.itemName}
            <div className={"ItemInput"}><button onClick={this.DecreasePrice}>-</button><input onChange={this.handleChangePrice} value={this.state.price} type="number"/><button onClick={this.IncrementPrice}>+</button></div>   
            </div>
        )

    }
}

export default ProducerProduct