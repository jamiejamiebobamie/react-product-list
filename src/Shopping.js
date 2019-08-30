import React, { Component } from 'react';
import './Shopping.css';
import Products from './Products.js'
import inventory, { categories } from './inventory'
import Pricebar from './Pricebar.js'


class Shopping extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentCategories: props.currentCategories,
        };
    }

    ChangeCategory(props) {
        if (props.category === "All"){
            this.setState( {currentCategories: [props.category]} );
        } else {
            if (this.state.currentCategories){
                if (this.state.currentCategories[0] === "All"){
                    this.setState( {currentCategories: [props.category]} );
                } else {
                    let notPresent = true;
                    for (let i = 0; i < this.state.currentCategories.length; i++){
                        if (this.state.currentCategories[i] === props.category){
                            notPresent = false;
                        }
                    }
                    if (notPresent) {
                        this.setState( {currentCategories:
                            [...this.state.currentCategories, props.category]} );
                    }
                }
            } else {
                this.setState( {currentCategories: [props.category]} );
            }
        }
    }

    CheckCategories(props){
        if (this.state.currentCategories){
            if (this.state.currentCategories[0] === "All"){
                return true
            } else {
                for (let i = 0; i < this.state.currentCategories.length; i++){
                    if (this.state.currentCategories[i] === props.category){
                        return true
                    }
                }
            }
        }
        return false
    }
    render(){
        const listItems =
        (categories.map((category) =>
            <li key={category} className={ this.CheckCategories({category}) ? "selectedButton":"unselectedButton"}>
                <button onClick={() => { this.ChangeCategory({category})}}>{category} ({inventory.filter(item => item.category === category).length})
                </button>
            </li>
            )
        ); // need to include array key here*    // https://reactjs.org/docs/lists-and-keys.html
    return (
        <div>
            <ul className="categories">
                {listItems}
                <li className={(this.CheckCategories({category: "All"}) ? "selectedButton":"unselectedButton")}>
                    <button onClick={() => this.ChangeCategory({category:"All"})}>All ({inventory.length})</button>
                </li>
                <li className={(false ? "selected-button":"unselectedButton")}>
                    <button onClick={() => this.setState( {currentCategories: null} )}>None (0)</button>
                </li>
            </ul>
            {(this.state.currentCategories!=null ? <Pricebar currentCategories={this.state.currentCategories}/>:"")}
            <Products addItemToCart={this.props.addItemToCart} currentCategories={this.state.currentCategories} />
        </div>
    )
}
}

export default Shopping
