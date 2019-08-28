import React from 'react';
import './Items.css'

function Items(props){
    return(
        <div className="Items">
        <li className="ItemsInfo">
            <div className="item-text">Name: {props.name}</div>
            <div className="item-text">Category: {props.category}</div>
            <div className="item-text">Price: {props.price}</div>
        </li>
        <img src="/imgs/product.png"/>
        </div>
    )
}


export default Items
