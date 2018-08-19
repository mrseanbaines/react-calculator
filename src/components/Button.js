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

  :focus,
  :active {
    background: rgba(0, 0, 0, 0.1);
    outline: none;
  }
`

class Button extends Component {
  componentWillMount() {
    window.addEventListener('click', this.blur);
  }

  blur(e) {
    e.target.blur()
  }

  render() {
    const { value, id, updateDisplay } = this.props;

    return (
      <ButtonWrapper
        onClick={() => updateDisplay(id === 'clear' ? 0 : value)}
        {...this.props}
      >
        {value}
      </ButtonWrapper>
    );
  }
}

export default Button;
