import React, { Component } from 'react';
import InputBox from './Login';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      username: '',
      password: '',
    }
    this.update = this.update.bind(this);
    this.alertUserPass = this.alertUserPass.bind(this);
  }

  update = (key, val) => {
    this.setState({[key]: val});
  }

  alertUserPass = () => {
    alert(`Username : ${this.state.username} Password : ${this.state.password}`);
  }

  render() {
    const {username, password} = this.state;

    return (
      <div className="App">
        <InputBox value={username} stateKey={'username'} update={this.update}/>
        <InputBox value={password} stateKey={'password'} update={this.update}/>
        <button onClick={this.alertUserPass}>Login</button>
      </div>
    );
  }
}

export default App;
