import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

const DisplayWrapper = styled(Flex)`
  background: rgba(255, 255, 255, 0.1);
  width: 100%;
  padding: 1.4em;
  position: relative;
`

const H1 = styled.h1`
  color: #fff;
  font-size: 8rem;
  margin: 0;
  line-height: 1;
  font-weight: 100;

  ::before {
    content: attr(data-operator);
    position: absolute;
    left: 1.4rem;
  }
`

class Display extends Component {
  render = () => {
    return (
      <DisplayWrapper
        justifyContent="flex-end"
        alignItems="flex-end"
        flexDirection="column"
      >
        <H1 data-operator={this.props.operator} id="display">
          {this.props.displayValue}
        </H1>
      </DisplayWrapper>
    );
  }
}

export default Display;
