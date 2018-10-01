import React, { Component } from 'react';
import Todo from './Todo';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list : [],
      input: '',
    }

  }

  updateInput = (e) => this.setState({input: e.target.value});

  addListItem = () => {
    let newList = this.state.list.slice();
    newList.push(this.state.input);
    this.setState({list: newList, input:''});
  }

  render() {
    return (
      <div className="App">
        <h1>My To-Do List:</h1>
        <input placeholder="Enter a new task" value={this.state.input} onChange={this.updateInput}/>
        <button onClick={this.addListItem}>Add Item</button>
        {this.state.list.map((el,i) => <Todo item={el} key={i}/>)}
      </div>
    );
  }
}

export default App;
