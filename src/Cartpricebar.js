import React from 'react';
import inventory from './inventory'
import './Cartpricebar.css'


function Cartpricebar(props){
    let price = 0;

    function add(number1,number2) {
        return number1+number2
    }

    let productPricesArray = []

    for (let i = 0; i < props.cartItems.length; i++){
        productPricesArray.push(parseFloat(props.cartItems[i].price))
    }

    price = productPricesArray.reduce(add)
    price = price.toString()
    price = price.split(".")
    if (price.length > 1){
        if (price[1].length < 2 ){
            price[1] = price[1]+ '0'
        }
        price = price[0] + "." + price[1].slice(0,2)
    }


    return (
        <div className="Pricebar">
            <h3>${price}</h3>
        </div>
    )
}

export default Cartpricebar
