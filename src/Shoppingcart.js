import React from 'react';
import './Shoppingcart.css';
import Pricebar from './Pricebar.js'
import Cartproducts from './Cartproducts.js'


function ShoppingCart(props){
    return (
        <div className="ShoppingCart">
        <img src="./imgs/cart_icon.png"alt=""/>
        <Cartproducts removeItemFromCart={props.removeItemFromCart} cartItems={props.cartItems} />
        </div>
    )
}

export default ShoppingCart

        // {(props.cartItems.length>0 ? <Pricebar currentCategories={props.cartItems}/>:"")}
