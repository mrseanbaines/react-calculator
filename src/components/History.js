import React, { Component } from 'react';
import styled from 'styled-components';
import { withTheme } from '../global/theme';

const H3 = styled.h3`
  color: ${props => props.theme.dark};
  font-size: 1.5rem;
  margin: 0;
  line-height: 1;
  font-weight: 300;
`

class History extends Component {
  render() {
    return (
      <H3 {...this.props}>
        2 x 50 x 3
      </H3>
    );
  }
}

export default withTheme(History);
