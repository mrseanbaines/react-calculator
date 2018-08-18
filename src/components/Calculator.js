import React, { Component } from 'react';
import Display from './Display';
import NumberPad from './NumberPad';
import { Flex } from 'grid-styled';

class Calculator extends Component {
  render() {
    return (
      <Flex css={{ height: '100%' }} flexDirection="column">
        <Flex flex="1 1 auto">
          <Display />
        </Flex>
        <Flex flex="2 1 auto">
          <NumberPad />
        </Flex>
      </Flex>
    );
  }
}

export default Calculator;
