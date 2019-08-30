import React from 'react';
import './Shoppingcart.css';
import Products from './Products.js'
import Pricebar from './Pricebar.js'


function ShoppingCart(props){
    return (
        <div className="ShoppingCart">
        <img src="./imgs/cart_icon.png"alt=""/>
        {(props.cartItems.length>0 ? <Pricebar currentCategories={props.cartItems}/>:"")}
        <Products currentCategories={props.cartItems} />
        </div>
    )
}

export default ShoppingCart
