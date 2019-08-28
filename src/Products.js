import React from 'react';
import './Products.css'
import inventory, { categories } from './inventory'
import Items from "./Items.js"

function Products(props){
    function DisplayProducts() {
        const category = props.currentCategory
        if (category === "All"){
            const results = inventory;
            const products =
            (results.map(
                (result) =>
                <Items name={result.name} category={result.category} price={result.price} />
                )
            ); // need to include array key here* //https://reactjs.org/docs/lists-and-keys.html
            return products;
        } else {
            const results = inventory.filter(item => item.category === category);
            const products =
            (results.map(
                (result) =>
                <Items name={result.name} category={result.category} price={result.price} />
                )
            ); // need to include array key here* //https://reactjs.org/docs/lists-and-keys.html
            return products;
        }
    }

    return (
    <ul className="Products">
        {DisplayProducts()}
    </ul>
    )
}




export default Products;
