import React, { Component } from 'react';
import Image from './Image';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image source={'https://http.cat/409'} altKey={'KittyKAT'} />
      </div>
    );
  }
}

export default App;
