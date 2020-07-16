import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
export const CartContext= React.createContext();
export default class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state={
      cartItems:[]
    }
    this.addToCart=this.addToCart.bind(this);
  }
  addToCart(product){
    console.log('adding to cart', product)
    this.setState({
      cartItems:this.state.cartItems.concat(product)
    })
  }
  render() {
    return (
      <div>
        <CartContext.Provider
       value={{ cartItems : this.state.cartItems, addToCart:this.addToCart}}
     
        >
  {this.props.children}
        </CartContext.Provider>
      </div>
    )
  }
}
