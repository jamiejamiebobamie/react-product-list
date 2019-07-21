import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';


// class LoggingButton extends React.Component {
//   // This syntax ensures `this` is bound within handleClick.
//   // Warning: this is *experimental* syntax.
//   handleClick = () => {
//     this.props.onButtonClick(this.props.value);
//   }
//
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.props.column}
//       </button>
//     );
//   }
// }



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {currentCategory: null, currentProducts: null};
    }

    ChangeCategory(props) {
        this.setState({currentCategory: props.category});
        this.setState({ currentProducts: this.DisplayProducts()})
        // console.log(this.state)
    }

    DisplayProducts() {
        const category = this.state.currentCategory
        const results = inventory.filter(item => item.category === category);
        const products =
        (results.map((result) =>
            <li className="items"><div className="item-text">Name: {result.name}</div><div className="item-text">Category: {result.category}</div><div className="item-text">Price: {result.price}</div></li>)); // need to include array key here* //https://reactjs.org/docs/lists-and-keys.html
        // console.log(products);
        return products;
    }

  render() {
    const products = this.state.currentProducts;
    console.log(products)
    const listItems =
    (categories.map((category) =>
        <li>
            <button onClick={() => this.ChangeCategory({category})}>{category}</button>
        </li>
        )
    ); // need to include array key here*    // https://reactjs.org/docs/lists-and-keys.html

    return (
      <div className="App">
        <h1 className="display">Show products here</h1>
        <ol className="container">
            <ul className="categories">
            {listItems}
            </ul>
            <ul className="products">
                {this.DisplayProducts()}
            </ul>
        </ol>
      </div>
    );
  }
}

export default App;
