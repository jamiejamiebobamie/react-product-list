import React from 'react';
import inventory, { categories } from './inventory'
import './PriceBar.css'

function Pricebar(props){
    const category = props.currentCategory
    let price = 0;

    function add(number1,number2) {
        return number1+number2
    }

    let productPricesArray = []
    if (category === "All"){
        const results = inventory;
        for (let i = 0; i < results.length; i++){
            productPricesArray.push(parseFloat(results[i].price))
        }
        price = productPricesArray.reduce(add)
        price = productPricesArray.reduce(add)
        price = price.toString()
        price = price.split(".")
        if (price.length > 1){
            price = price[0] + "." + price[1].slice(0,2)
        }

    } else {
        const results = inventory.filter(item => item.category === category);
        for (let i = 0; i < results.length; i++){
            productPricesArray.push(parseFloat(results[i].price))
        }
        price = productPricesArray.reduce(add)
        price = price.toString()
        price = price.split(".")
        if (price.length > 1){
            price = price[0] + "." + price[1].slice(0,2)
        }
    }

    return (
        <div className="Pricebar">
            <h1>the price for these products is {price} dollars</h1>
        </div>
    )
}

export default Pricebar
