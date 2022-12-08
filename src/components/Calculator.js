/* eslint-disable react/button-has-type */
import React from 'react';

export default class MyCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="display"><span>0</span></div>
        <div className="grid-btn-container">
          <div className="calc-row-btn">
            <button type="button" className="clear-result">AC</button>
            <button type="button" className="plus-or-minus">+/-</button>
            <button type="button" className="percentage">%</button>
            <button type="button" className="operator">&divide;</button>
          </div>

          <div className="calc-row-btn">
            <button type="button" className="digit">7</button>
            <button type="button" className="digit">8</button>
            <button type="button" className="digit">9</button>
            <button type="button" className="operator">&times;</button>
          </div>

          <div className="calc-row-btn">
            <button type="button" className="digit">4</button>
            <button type="button" className="digit">5</button>
            <button type="button" className="digit">6</button>
            <button type="button" className="operator">-</button>
          </div>

          <div className="calc-row-btn">
            <button type="button" className="digit">1</button>
            <button type="button" className="digit">2</button>
            <button type="button" className="digit">3</button>
            <button type="button" className="operator">+</button>
          </div>

          <div className="calc-row-btn3">
            <button type="button" className="digit">0</button>
            <button type="button" className="digit">&bull;</button>
            <button type="button" className="operator">=</button>
          </div>
        </div>
      </div>
    );
  }
}
