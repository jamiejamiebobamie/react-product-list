import React, { Component } from 'react';
import './App.css';
import Shoppingcart from './Shoppingcart.js';
import Shopping from './Shopping.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.addItemToCart = this.addItemToCart.bind(this);
        this.state = {
            currentCategories: null,
            ShoppingCartToggled: false,
            cartItems: [],
        };
    }

    addItemToCart(props) {
        console.log(props)
        this.setState( { cartItems: [...this.state.cartItems, props] } );
    }

  render() {
    let pageContent
    if (this.state.ShoppingCartToggled){
        pageContent = <Shoppingcart cartItems={this.state.cartItems}/>
    }else{
        pageContent = <Shopping addItemToCart={this.addItemToCart} currentCategories={this.state.currentCategories}/>
    }
        return (
          <div className="App">
          <h1 className="display">EasyShop</h1>
          <button className="toggleCart" onClick={ () => { this.setState( {ShoppingCartToggled: !this.state.ShoppingCartToggled} ) } }> { (this.state.ShoppingCartToggled ? 'Shop' :("My Cart ("+this.state.cartItems.length+")") )}</button>
            <ol className="container">
                {pageContent}
            </ol>
          </div>
        );
    }
  }

export default App;
