import React from "react"
import ShoppingCart from "./ShoppingCart.css"
 class ShoppingCartdud extends React.Component{

    constructor(){
        super()
       this.state={

       };

    }
    render(){

        return(
            <body>
            <div class="container">
              <header class="header">
                <h3 class="header-logo">Simple Store</h3>
                
                <nav class="header-nav">
                  <ul>
                    <li><a href="#0">Home</a></li>
                    <li><a href="#0">Products</a></li>
                    <li><a href="#0">Contact</a></li>
                  </ul>
                </nav>
              </header>
              
              <div class="products">
              </div>
              
              <div class="shopping-cart">
                <div class="shopping-cart-head">
                  <span class="product-quantity">0</span> Product(s) in Cart
                </div>
                <ul class="shopping-cart-list">
                </ul>
                <div class="cart-buttons">
                  <a href="#0" class="button empty-cart-btn">Empty</a>
                  <a href="#0" class="button cart-checkout">Checkout - <span class="total-price">$0</span></a>
                </div>
              </div>
            </div>
          </body>
        )
    }
}
export default ShoppingCartdud