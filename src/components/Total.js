import React, { Component } from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  color: #fff;
  font-size: 8rem;
  margin: 0;
  line-height: 1;
  font-weight: 100;
`

class Total extends Component {
  render() {
    return (
      <div>
        <H1>300</H1>
      </div>
    );
  }
}

export default Total;
