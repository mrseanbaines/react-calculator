import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

const DisplayWrapper = styled(Flex)`
  background: rgba(255, 255, 255, 0.1);
  width: 100%;
  padding: 1.4em;
`

const H1 = styled.h1`
  color: #fff;
  font-size: 8rem;
  margin: 0;
  line-height: 1;
  font-weight: 100;
`

const H3 = styled.h3`
  color: ${props => props.theme.dark};
  font-size: 1.5rem;
  margin: 0;
  line-height: 1;
  font-weight: 300;
`

class Display extends Component {
  render() {
    return (
      <DisplayWrapper
        justifyContent="flex-end"
        alignItems="flex-end"
        flexDirection="column"
      >
        <H3 {...this.props}>
          {this.props.history}
        </H3>
        <H1 id="display">
          {this.props.total}
        </H1>
      </DisplayWrapper>
    );
  }
}

export default Display;
