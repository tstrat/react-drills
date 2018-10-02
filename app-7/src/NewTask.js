import React, { Component } from 'react';
import './App.css';

class NewTask extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
        }

    }   

    updateInput = (e) => this.setState({input: e.target.value});

    render() {
        return (
            <div>
                <input placeholder="Enter new task" value={this.state.input} onChange={this.updateInput}/>
                <button onClick={e=>this.props.update(this.state.input)}>Add</button>
            </div>
        );
    }
}

export default NewTask;
