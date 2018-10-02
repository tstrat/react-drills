import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      planets: []
    }
  }

  componentDidMount() {
    axios.get('https://www.swapi.co/api/planets/')
    .then(res => {
      const smallResult = res.data.results.map(obj => 
        {
          return {name: obj.name , climate: obj.climate}
        }
      );
      this.setState({planets: smallResult});
    })
  }

  render() {
    const {planets} = this.state;
    
    const planetRender = planets.map(planet => {
      return (
        <div>
          <h1>{planet.name}</h1>
          <h3>{planet.climate}</h3>
        </div>
      )
    })
    return (
      <div className="App">
        {planetRender}
      </div>
    );
  }
}

export default App;
