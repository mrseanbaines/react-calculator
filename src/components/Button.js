import React, { Component } from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  font-family: inherit;
  border: none;
  text-align: center;
  color: ${props => props.color};
  font-size: 2rem;
  width: 100%;
  height: 100%;
  background: transparent;
  padding: 0;
  transition: all 200ms;
  outline: none;
  cursor: pointer;

  &.active {
    background: rgba(0, 0, 0, 0.1);
    outline: none;
  }

  :active {
    background: rgba(0, 0, 0, 0.2);
    outline: none;
  }
`

class Button extends Component {
  componentWillMount = () => {
    window.addEventListener('keydown', (e) => this.handleKeydown(e));
  }

  componentDidMount = () => {
    const numberPad = document.getElementById('number-pad');
    numberPad.addEventListener('click', this.blur);
  }

  handleKeydown = (e) => {
    const { value, type, handleKeyPress } = this.props;

    if (e.key === value || e.key === type) {
      handleKeyPress(value, type);
    } else if (e.key === '*') {
      handleKeyPress('x', 'operator');
    } else if (e.key === '/') {
      handleKeyPress('÷', 'operator');
    } else if (e.key === 'Enter') {
      handleKeyPress('=', 'equals');
    } else if (e.key === 'Escape') {
      handleKeyPress(null, 'clear');
    }
  }

  blur = (e) => {
    const button = e.target.closest('button');
    button.blur();
  }

  render = () => {
    const { value, type, handleKeyPress, operator } = this.props;

    return (
      <ButtonWrapper
        className={(operator === value) && 'active'}
        onClick={() => handleKeyPress(value, type)}
        {...this.props}
      >
        {value}
      </ButtonWrapper>
    );
  }
}

export default Button;
