import React, { Component } from 'react';
import MyCalculator from './components/Calculator';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <MyCalculator />
      </div>
    );
  }
}
