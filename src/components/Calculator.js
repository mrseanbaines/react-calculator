import React, { Component } from 'react';
import Display from './Display';
import NumberPad from './NumberPad';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import { withTheme } from '../global/theme';

const CalculatorWrapper = styled(Flex)`
  background: ${props => props.theme.main};
`

const initialState = {
  prevKeyType: null,
  operator: null,
  displayValue: '0',
  firstValue: null,
};

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  calculate = (a, operator, b) => {
    a = parseFloat(a);
    b = parseFloat(b);

    return parseFloat((
      operator === '+' ? a + b :
      operator === '-' ? a - b :
      operator === 'x' ? a * b :
      operator === '÷' ? a / b :
      operator === '%' ? a * (b / 100):
      ''
    ).toFixed(4)).toString();
  }

  handleKeyPress = (value, type) => {
    const {
      prevKeyType,
      operator,
      displayValue,
      firstValue
    } = this.state;

    this.setState({
      prevKeyType: type
    });

    switch (type) {
      case 'clear':
        this.setState(initialState);
        break;

      case 'Backspace':
        if (displayValue !== '0') {
          if (displayValue.length <= 1) {
            this.setState({
              displayValue: '0'
            });
          } else {
            this.setState(prevState => ({
              displayValue: prevState.displayValue.substring(0, prevState.displayValue.length - 1)
            }));
          }
        }
        break;

      case 'decimal':
        if (prevKeyType === 'operator' || prevKeyType === 'equals') {
          this.setState({
            displayValue: '0.'
          });
        } else if (!displayValue.includes('.')) {
          this.setState(prevState => ({
            displayValue: prevState.displayValue + value
          }));
        }
        break;

      case 'number':
        if (displayValue === '0' || prevKeyType === 'operator' || prevKeyType === 'equals') {
          this.setState({
            displayValue: value
          });
        } else {
          this.setState(prevState => ({
            displayValue: prevState.displayValue + value
          }));
        }
        break;

      case 'operator':
        if (firstValue && operator && prevKeyType !== 'operator') {
          const sum = this.calculate(firstValue, operator, displayValue);

          this.setState({
            displayValue: sum,
            firstValue: sum,
            operator: value,
          });
        } else {
          this.setState({
            operator: value,
            firstValue: displayValue,
          });
        }
        break;

      case 'equals':
        if (firstValue && prevKeyType !== 'equals' && prevKeyType !== 'operator' && operator !== null) {
          this.setState({
            operator: null,
            displayValue: this.calculate(firstValue, operator, displayValue)
          });
        }
        break;

      case 'plusMinus':
        if (displayValue !== '0') {
          if (displayValue.includes('-')) {
            this.setState(prevState => ({
              displayValue: prevState.displayValue.replace('-', '')
            }));
          } else {
            this.setState(prevState => ({
              displayValue: '-' + prevState.displayValue
            }));
          }
        }
        break;

      case 'percent':
        if (prevKeyType !== 'percent') {
          if (firstValue) {
            this.setState(prevState => ({
              displayValue: this.calculate(firstValue, value, displayValue)
            }));
          }
          else {
            this.setState(prevState => ({
              displayValue: parseFloat(prevState.displayValue) / 100
            }));
          }
        }
        break;

      default:
        return;
    }
  }

  render = () => {
    return (
      <CalculatorWrapper
        css={{ height: '100%' }}
        flexDirection="column"
        {...this.props}
      >
        <Flex flex="1 1 auto">
          <Display {...this.state} />
        </Flex>
        <Flex flex="2 1 auto">
          <NumberPad
            handleKeyPress={this.handleKeyPress}
            operator={this.state.operator}
          />
        </Flex>
      </CalculatorWrapper>
    );
  }
}

export default withTheme(Calculator);
