/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const MyCalculator = () => {
  const [calculateData, setCalculateData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (elem) => {
    setCalculateData((state) => calculate(state, elem.target.textContent));
  };

  const { total, next, operation } = calculateData;
  const output = `${total}${operation}${next}`.replace(/null/g, '').replace(/undefined/g, '');

  return (
    <div className="calculator">
      <div className="display"><span>{output === '' ? '0' : output}</span></div>
      <div className="grid-btn-container">
        <div className="calc-row-btn">
          <button type="button" onClick={handleClick} className="clear-result">AC</button>
          <button type="button" onClick={handleClick} className="plus-or-minus">+/-</button>
          <button type="button" onClick={handleClick} className="percentage">%</button>
          <button type="button" onClick={handleClick} className="operator">&divide;</button>
        </div>

        <div className="calc-row-btn">
          <button type="button" onClick={handleClick} className="digit">7</button>
          <button type="button" onClick={handleClick} className="digit">8</button>
          <button type="button" onClick={handleClick} className="digit">9</button>
          <button type="button" onClick={handleClick} className="operator">x</button>
        </div>

        <div className="calc-row-btn">
          <button type="button" onClick={handleClick} className="digit">4</button>
          <button type="button" onClick={handleClick} className="digit">5</button>
          <button type="button" onClick={handleClick} className="digit">6</button>
          <button type="button" onClick={handleClick} className="operator">-</button>
        </div>

        <div className="calc-row-btn">
          <button type="button" onClick={handleClick} className="digit">1</button>
          <button type="button" onClick={handleClick} className="digit">2</button>
          <button type="button" onClick={handleClick} className="digit">3</button>
          <button type="button" onClick={handleClick} className="operator">+</button>
        </div>

        <div className="calc-row-btn3">
          <button type="button" onClick={handleClick} className="digit">0</button>
          <button type="button" onClick={handleClick} className="digit digits-dot">.</button>
          <button type="button" onClick={handleClick} className="operator">=</button>
        </div>
      </div>
    </div>
  );
};

export default MyCalculator;
