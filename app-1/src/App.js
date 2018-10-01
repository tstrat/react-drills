import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text : ''
    }
  }

  updateText = e => { this.setState({text: e.target.value})};

  render() {
    const { text } = this.state;
    return (
      <div className="App">
        <input value={text} onChange={this.updateText}/>
        <div className=""><h3>{text}</h3></div>
      </div>
    );
  }
}

export default App;
