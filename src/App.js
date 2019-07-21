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
        this.state = {chosenCategory: ""};
    }

    changeCategory(props) {
        this.setState({chosenCategory: props.category});
    }

    displayProducts() {
        const category = this.state.chosenCategory
        const results = inventory.filter(item => item.category === category);
        const products =
        (results.map((result) =>
            <li>{result.name} {result.category} {result.price}</li>)); // need to include array key here* //https://reactjs.org/docs/lists-and-keys.html
        return products
    }

  render() {

    const listItems =
    (categories.map((category) =>
        <li><button onClick={() => this.changeCategory({category})}>{category}</button></li>)); // need to include array key here*
                                                                                                // https://reactjs.org/docs/lists-and-keys.html
    return (
      <div className="App">
        <h1>Show products here</h1>
            <ul class="categories">
            {listItems}
            </ul>
        <ul>
            {this.displayProducts()}
        </ul>

      </div>
    );
  }
}

export default App;
