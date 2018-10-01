import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    const foods = [
      "spaghetti",
      "ice cream",
      "sushi",
      "bologna",
      "cheese"
    ]
    this.state = {
      food : foods,
      input: '',
    }
  }

  updateFilterInput = (e) => {this.setState({input: e.target.value,});}

  render() {
    const {input, food} = this.state;
    return (
      <div className="App">
        <input value={input} onChange={this.updateFilterInput} />
        {food.filter(str => str.includes(input)).map((el,i) =><h1 key={i}>{el}</h1>)}
      </div>
    );
  }
}

export default App;
