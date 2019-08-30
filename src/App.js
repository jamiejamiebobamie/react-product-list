import React, { Component } from 'react';
import './App.css';
import Shoppingcart from './Shoppingcart.js';
import Shopping from './Shopping.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.addItemToCart = this.addItemToCart.bind(this);
        this.removeItemFromCart = this.removeItemFromCart.bind(this);
        this.state = {
            currentCategories: null,
            ShoppingCartToggled: false,
            cartItems: [],
        };
    }

    addItemToCart(props) {
        this.setState( { cartItems: [...this.state.cartItems, props] } );
    }

// https://stackoverflow.com/questions/36326612/delete-item-from-state-array-in-react
    removeItemFromCart(props) {
        console.log('hello', props)
        let array = [...this.state.cartItems]; // make a separate copy of the array
        array.splice(props, 1);
        this.setState( {cartItems: array} );
        console.log(this.state.cartItems)
    }
        // this.setState( { cartItems: [...this.state.cartItems, props] } );

  render() {
    let pageContent
    if (this.state.ShoppingCartToggled){
        pageContent = <Shoppingcart removeItemFromCart={this.removeItemFromCart} cartItems={this.state.cartItems}/>
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
