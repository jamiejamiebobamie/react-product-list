import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';
import Products from './Products.js'
import Pricebar from './PriceBar.js'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {currentCategory: null};
    }

    ChangeCategory(props) {
        this.setState({currentCategory: props.category});
    }

  render() {
    const listItems =
    (categories.map((category) =>
        <li className={(this.state.currentCategory===category ? "selected-button":"")}>
            <button onClick={() => this.ChangeCategory({category})}>{category}</button>
        </li>
        )
    ); // need to include array key here*    // https://reactjs.org/docs/lists-and-keys.html
    return (
      <div className="App">
        <h1 className="display">Products:</h1>
        <ol className="container">
            <ul className="categories">
                {listItems}
                <li className={(this.state.currentCategory==="All" ? "selected-button":"")}>
                    <button onClick={() => this.ChangeCategory({category:"All"})}>All</button>
                </li>
            </ul>
            <Products currentCategory={this.state.currentCategory} />
        </ol>
        {(this.state.currentCategory!=null ? <Pricebar currentCategory={this.state.currentCategory}/>:"")}
      </div>
    );
  }
}

export default App;
