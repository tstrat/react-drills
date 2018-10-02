import React, { Component } from 'react';
import NewTask from './NewTask';
import List from './List';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list : [],
    }
  }

  addListItem = (val) => {
    let newList = this.state.list.slice();
    newList.push(val);
    this.setState({list: newList});
  }

  render() {
    console.log('state', this.state.list);
    return (
      <div className="App">
        <h1>My To-Do List:</h1>
        <NewTask update={this.addListItem} />
        <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
