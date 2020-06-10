import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Chris Hooper',
      age: '50',
      occupation: 'Lawyer',
      town: 'Greenwich',
      state: 'CT'
    };
  }

  render() {
    return (
      <div>
        <h1> Data </h1>
        <b>Name:</b>  {this.state.name}<br />
        <b>Age:</b> {this.state.age}
        <br />
        <b>Occupation:</b> {this.state.occupation} <br />
        <b>Town:</b> {this.state.town} <br />
        <b>State:</b> {this.state.state} <br />
        <br/>


          Start editing to see some magic happen :)
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
