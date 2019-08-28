import React from 'react';
import './Items.css'

function Items(props){
    return(
        <li className="Items">
            <div className="item-text">Name: {props.name}</div>
            <div className="item-text">Category: {props.category}</div>
            <div className="item-text">Price: {props.price}</div>
        </li>
    )
}


export default Items
