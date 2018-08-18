import React, { Component } from 'react';
import History from './History';
import Total from './Total';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

const DisplayWrapper = styled(Flex)`
  background: #414141;
  width: 100%;
`

class Display extends Component {
  render() {
    return (
      <DisplayWrapper
        id="display"
        justifyContent="flex-end"
        alignItems="flex-end"
        flexDirection="column"
      >
        <History />
        <Total />
      </DisplayWrapper>
    );
  }
}

export default Display;
