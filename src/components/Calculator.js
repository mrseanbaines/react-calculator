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
  render() {
    return (
      <CalculatorWrapper
        css={{ height: '100%' }}
        flexDirection="column"
        {...this.props}
      >
        <Flex flex="1 1 auto">
          <Display />
        </Flex>
        <Flex flex="2 1 auto">
          <NumberPad />
        </Flex>
      </CalculatorWrapper>
    );
  }
}

export default withTheme(Calculator);
