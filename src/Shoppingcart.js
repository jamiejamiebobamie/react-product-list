import React from 'react';
import './Shoppingcart.css';
import Pricebar from './Pricebar.js'
import Cartproducts from './Cartproducts.js'
import './Shoppingcart.css'


function ShoppingCart(props){
    const noItems = (
        <div>
        <img className="cartPicture" src="./imgs/cart_icon.png"alt=""/>
        <h1 className="cartMessage">No items in cart</h1>
        </div>
    )
    return (
        <div className="ShoppingCart">
        {(props.cartItems.length>0 ? <Cartproducts removeItemFromCart={props.removeItemFromCart} cartItems={props.cartItems} /> : noItems)}
        </div>
    )
}

export default ShoppingCart

        // {(props.cartItems.length>0 ? <Pricebar currentCategories={props.cartItems}/>:"")}
