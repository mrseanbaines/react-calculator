import React, { Component } from 'react';
import Display from './Display';
import NumberPad from './NumberPad';

class Calculator extends Component {
  render() {
    return (
      <div>
        <Display />
        <NumberPad />
      </div>
    );
  }
}

export default Calculator;
