import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';
import Products from './Products.js'
import Pricebar from './Pricebar.js'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {currentCategories: null};
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
            if (this.state.currentCategories[0] === "All" || this.state.currentCategories[0] === "None"){
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

  render() {
    const listItems =
    (categories.map((category) =>
        <li className={ this.CheckCategories({category}) ? "selected-button":""}>
            <button onClick={() => { this.ChangeCategory({category})}}>{category}
            ({inventory.filter(item => item.category === category).length})
            </button>
        </li>
        )
    ); // need to include array key here*    // https://reactjs.org/docs/lists-and-keys.html
    return (
      <div className="App">
        <ol className="container">
            <ul className="categories">
                {listItems}
                <li className={(this.CheckCategories({category: "All"}) ? "selected-button":"")}>
                    <button onClick={() => this.ChangeCategory({category:"All"})}>All ({inventory.length})</button>
                </li>
                <li className={(false ? "selected-button":"")}>
                    <button onClick={() => this.setState( {currentCategories: null} )}>None (0)</button>
                </li>
            </ul>
            {(this.state.currentCategories!=null ? <Pricebar currentCategories={this.state.currentCategories}/>:"")}
            <Products currentCategories={this.state.currentCategories} />
        </ol>
      </div>
    );
  }
}

export default App;
