import React, { Component } from 'react';
import './App.css';
import Shoppingcart from './Shoppingcart.js';
import Shopping from './Shopping.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCategories: null,
            ShoppingCartToggled: false,
            cartItems: null,
        };
    }
  render() {
    let pageContent
    console.log(this.state.ShoppingCartToggled)
    if (this.state.ShoppingCartToggled){
        pageContent = <Shoppingcart cartItems={this.state.cartItems}/>
    }else{
        pageContent = <Shopping currentCategories={this.state.currentCategories}/>
    }
        return (
          <div className="App">
          <button onClick={() => { this.setState( {ShoppingCartToggled: !this.state.ShoppingCartToggled} ) }}>My Cart ({(this.state.cartItems?this.state.cartItems.length:'0')})</button>
            <ol className="container">
                {pageContent}
            </ol>
          </div>
        );
    }
  }

export default App;
