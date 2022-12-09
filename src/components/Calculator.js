/* eslint-disable react/button-has-type */
import React from 'react';
import calculate from '../logic/calculate';

export default class MyCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(elem) {
    this.setState((state) => calculate(state, elem.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    const output = `${total}${operation}${next}`.replace(/null/g, '');
    const resultantOutput = output.replace(/undefined/g, '');

    return (
      <div className="calculator">
        <div className="display"><span>{resultantOutput === '' ? '0' : resultantOutput}</span></div>
        <div className="grid-btn-container">
          <div className="calc-row-btn">
            <button type="button" onClick={this.handleClick} className="clear-result">AC</button>
            <button type="button" onClick={this.handleClick} className="plus-or-minus">+/-</button>
            <button type="button" onClick={this.handleClick} className="percentage">%</button>
            <button type="button" onClick={this.handleClick} className="operator">&divide;</button>
          </div>

          <div className="calc-row-btn">
            <button type="button" onClick={this.handleClick} className="digit">7</button>
            <button type="button" onClick={this.handleClick} className="digit">8</button>
            <button type="button" onClick={this.handleClick} className="digit">9</button>
            <button type="button" onClick={this.handleClick} className="operator">x</button>
          </div>

          <div className="calc-row-btn">
            <button type="button" onClick={this.handleClick} className="digit">4</button>
            <button type="button" onClick={this.handleClick} className="digit">5</button>
            <button type="button" onClick={this.handleClick} className="digit">6</button>
            <button type="button" onClick={this.handleClick} className="operator">-</button>
          </div>

          <div className="calc-row-btn">
            <button type="button" onClick={this.handleClick} className="digit">1</button>
            <button type="button" onClick={this.handleClick} className="digit">2</button>
            <button type="button" onClick={this.handleClick} className="digit">3</button>
            <button type="button" onClick={this.handleClick} className="operator">+</button>
          </div>

          <div className="calc-row-btn3">
            <button type="button" onClick={this.handleClick} className="digit">0</button>
            <button type="button" onClick={this.handleClick} className="digit digits-dot">.</button>
            <button type="button" onClick={this.handleClick} className="operator">=</button>
          </div>
        </div>
      </div>
    );
  }
}
