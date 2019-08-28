import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';
import Products from './Products.js'
import Pricebar from './PriceBar.js'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {currentCategories: null};
    }

    ChangeCategory(props) {
        if (props.category == "All"){
            this.setState( {currentCategories: [props.category]} );
        } else {
            if (this.state.currentCategories){
                if (this.state.currentCategories[0] === "All"){
                    this.setState( {currentCategories: [props.category]} );
                } else {
                    this.setState( {currentCategories: [...this.state.currentCategories, props.category]} );
                }
            } else {
                this.setState( {currentCategories: [props.category]} );
            }
        }
    }

    CheckCategories(props){
        for (let i = 0; i < props.currentCategories; i++){
            if (props.currentCategories[i] === props.category){
                console.log("hey")
                return true
            }
        }
        return false
    }

  render() {
    let selected = false;
    console.log(selected,this.state.currentCategories)
    const listItems =
    (categories.map((category) =>
        <li className={ selected ? "selected-button":""}>
            <button onClick={() => { this.ChangeCategory({category}); this.CheckCategories({currentCategories: this.state.currentCategories, category: category}) } }>{category} ({inventory.filter(item => item.category === category).length})</button>
        </li>
        )
    ); // need to include array key here*    // https://reactjs.org/docs/lists-and-keys.html
    return (
      <div className="App">
        <ol className="container">
            <ul className="categories">
                {listItems}
                <li className={(this.state.currentCategory==="All" ? "selected-button":"")}>
                    <button onClick={() => this.ChangeCategory({category:"All"})}>All ({inventory.length})</button>
                </li>
            </ul>
            <Products currentCategories={this.state.currentCategories} />
        </ol>
      </div>
    );
  }
}

export default App;
