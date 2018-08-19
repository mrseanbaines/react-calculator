import React, { Component } from 'react';
import Display from './Display';
import NumberPad from './NumberPad';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import { withTheme } from '../global/theme';

const CalculatorWrapper = styled(Flex)`
  background: ${props => props.theme.main};
`

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history: 0,
      total: 0
    };
  }

  updateDisplay = (num) => {
    this.setState(prevState => ({
      history: prevState.total += num,
      total: prevState.total += num
    }));
  }

  render() {
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
          <NumberPad updateDisplay={this.updateDisplay} />
        </Flex>
      </CalculatorWrapper>
    );
  }
}

export default withTheme(Calculator);
