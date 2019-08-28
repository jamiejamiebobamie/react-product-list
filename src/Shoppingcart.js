import React from 'react';
import './Shoppingcart.css';
import Products from './Products.js'
import Pricebar from './Pricebar.js'


function ShoppingCart(props){
    return (
        <div className="ShoppingCart">
        <h1>This is the shopping cart!</h1>
        {(props.currentCategories!=null ? <Pricebar currentCategories={props.cartItems}/>:"")}
        <Products currentCategories={props.cartItems} />
        </div>


    )
}

export default ShoppingCart
