import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem'

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }

  }

  render() {
    return (
      <div className="App">
          {this.state.list.map((e,i) => <ListItem food={e} key={i}/>)}
      </div>
    );
  }
}

export default App;
