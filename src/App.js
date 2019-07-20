import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {chosenCategory: ""};
    }



  render() {

      function displayProducts(props){
          const category = props.category
          if (this.state.chosenCategory === category){
              const results = inventory.filter(item => item.category === category);
              const products =
              (results.map((result) =>
                  <li>{result.name} {result.category} {result.price}</li>)); // need to include array key here*                                                      // https://reactjs.org/docs/lists-and-keys.html
              return (
                  products
          );
          }
      }

    console.log({categories});
    console.log(categories);
    const listItems =
    (categories.map((category) =>
        <li><button>{category}</button></li>)); // need to include array key here*
                                               // https://reactjs.org/docs/lists-and-keys.html
    console.log(listItems)
    return (
      <div className="App">
        <h1>Show products here</h1>
            <ul class="categories">
            {listItems}
            </ul>
        <ul>
          <displayProducts category={this.state.category} />
        </ul>

      </div>
    );
  }
}

export default App;
