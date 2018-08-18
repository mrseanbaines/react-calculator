import React, { Component } from 'react';
import Button from './Button';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

const NumberPadWrapper = styled(Flex)`
  width: 100%;
`

const backIcon = <i className="fa fa-arrow-left"></i>;
const clearIcon = <i className="fa fa-trash"></i>;

const buttons = [
  { symbol: '7', isButton: false, id: 'seven' },
  { symbol: '8', isButton: false, id: 'eight' },
  { symbol: '9', isButton: false, id: 'nine' },
  { symbol: '4', isButton: false, id: 'four' },
  { symbol: '5', isButton: false, id: 'five' },
  { symbol: '6', isButton: false, id: 'six' },
  { symbol: '1', isButton: false, id: 'one' },
  { symbol: '2', isButton: false, id: 'two' },
  { symbol: '3', isButton: false, id: 'three' },
  { symbol: '0', isButton: false, id: 'zero' },
  { symbol: '•', isButton: false, id: 'decimal' },
  { symbol: backIcon, isButton: false, id: 'back' },
  { symbol: '+/-', isButton: true, id: 'plusMinus' },
  { symbol: '%', isButton: true, id: 'percent' },
  { symbol: '+', isButton: true, id: 'add' },
  { symbol: '-', isButton: true, id: 'subtract' },
  { symbol: 'x', isButton: true, id: 'multiply' },
  { symbol: '÷', isButton: true, id: 'divide' },
  { symbol: clearIcon, isButton: true, id: 'clear' },
  { symbol: '=', isButton: true, id: 'equals' }
];

class NumberPad extends Component {
  render() {
    return (
      <NumberPadWrapper flexWrap="wrap">
        <Flex flexWrap="wrap" width={3/5}>
          {buttons.filter(button => !button.isButton).map(button => (
            <Box key={button.id} width={1/3} css={{ textAlign: 'center' }}>
              <Button
                id={button.id}
                symbol={button.symbol}
                isButton={button.isButton}
              />
            </Box>
          ))}
        </Flex>

        <Flex flexWrap="wrap" width={2/5}>
          {buttons.filter(button => button.isButton).map(button => (
            <Box key={button.id} width={1/2} css={{ textAlign: 'center' }}>
              <Button
                id={button.id}
                symbol={button.symbol}
                isButton={button.isButton}
                color={button.id === 'clear' ? 'secondary' : 'dark'}
              />
            </Box>
          ))}
        </Flex>
      </NumberPadWrapper>
    );
  }
}

export default NumberPad;
