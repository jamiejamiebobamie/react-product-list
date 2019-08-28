import React from 'react';
import inventory, { categories } from './inventory'
import './PriceBar.css'

function Pricebar(props){
    const category = props.currentCategory
    let price = 0;
    let results

    function add(number1,number2) {
        return number1+number2
    }

    let productPricesArray = []
    if (category === "All"){
        results = inventory;
    } else {
        results = inventory.filter(item => item.category === category);
    }

    for (let i = 0; i < results.length; i++){
        productPricesArray.push(parseFloat(results[i].price))
    }

    price = productPricesArray.reduce(add)
    price = price.toString()
    price = price.split(".")
    if (price.length > 1){
        if (price[1].length < 2 ){
            price[1] = price[1]+ '0'
        }
        price = price[0] + "." + price[1].slice(0,2)
    } else {
        price = price[0] + " dollars"
    }

    return (
        <div className="Pricebar">
            <h3>the price is {price}</h3>
        </div>
    )
}

export default Pricebar
