import React, { Component } from 'react';
import Button from './Button';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { withTheme } from '../global/theme';

const NumberPadWrapper = styled(Flex)`
  width: 100%;
`

const backIcon = <i className="fa fa-arrow-left"></i>;
const clearIcon = <i className="fa fa-trash"></i>;

class NumberPad extends Component {
  render = () => {
    const {
      handleKeyPress,
      operator,
      theme
    } = this.props;

    return (
      <NumberPadWrapper id="number-pad" flexWrap="wrap">
        <Flex flexWrap="wrap" width={3/5}>
          <Box width={1/3}>
            <Button
              operator={operator}
              handleKeyPress={handleKeyPress}
              value="7"
              id="seven"
              type="number"
              color={theme.light}
            />
          </Box>
          <Box width={1/3}>
            <Button
              operator={operator}
              handleKeyPress={handleKeyPress}
              value="8"
              id="eight"
              type="number"
              color={theme.light}
            />
          </Box>
          <Box width={1/3}>
            <Button
              operator={operator}
              handleKeyPress={handleKeyPress}
              value="9"
              id="nine"
              type="number"
              color={theme.light}
            />
          </Box>
          <Box width={1/3}>
            <Button
              operator={operator}
              handleKeyPress={handleKeyPress}
              value="4"
              id="four"
              type="number"
              color={theme.light}
            />
          </Box>
          <Box width={1/3}>
            <Button
              operator={operator}
              handleKeyPress={handleKeyPress}
              value="5"
              id="five"
              type="number"
              color={theme.light}
            />
          </Box>
          <Box width={1/3}>
            <Button
              operator={operator}
              handleKeyPress={handleKeyPress}
              value="6"
              id="six"
              type="number"
              color={theme.light}
            />
          </Box>
          <Box width={1/3}>
            <Button
              operator={operator}
              handleKeyPress={handleKeyPress}
              value="1"
              id="one"
              type="number"
              color={theme.light}
            />
          </Box>
          <Box width={1/3}>
            <Button
              operator={operator}
              handleKeyPress={handleKeyPress}
              value="2"
              id="two"
              type="number"
              color={theme.light}
            />
          </Box>
          <Box width={1/3}>
            <Button
              operator={operator}
              handleKeyPress={handleKeyPress}
              value="3"
              id="three"
              type="number"
              color={theme.light}
            />
          </Box>
          <Box width={1/3}>
            <Button
              operator={operator}
              handleKeyPress={handleKeyPress}
              value="0"
              id="zero"
              type="number"
              color={theme.light}
            />
          </Box>
          <Box width={1/3}>
            <Button
              operator={operator}
              handleKeyPress={handleKeyPress}
              value="."
              id="decimal"
              type="decimal"
              color={theme.light}
            />
          </Box>
          <Box width={1/3}>
            <Button
              operator={operator}
              handleKeyPress={handleKeyPress}
              value={backIcon}
              id="Backspace"
              type="Backspace"
              color={theme.dark}
            />
          </Box>
        </Flex>

        <Flex flexWrap="wrap" width={2/5}>
          <Box width={1/2}>
            <Button
              operator={operator}
              handleKeyPress={handleKeyPress}
              value="+/-"
              id="plusMinus"
              type="plusMinus"
              color={theme.dark}
            />
          </Box>
          <Box width={1/2}>
            <Button
              operator={operator}
              handleKeyPress={handleKeyPress}
              value="%"
              id="percent"
              type="percent"
              color={theme.dark}
            />
          </Box>
          <Box width={1/2}>
            <Button
              operator={operator}
              handleKeyPress={handleKeyPress}
              value="+"
              id="add"
              type="operator"
              color={theme.dark}
            />
          </Box>
          <Box width={1/2}>
            <Button
              operator={operator}
              handleKeyPress={handleKeyPress}
              value="-"
              id="subtract"
              type="operator"
              color={theme.dark}
            />
          </Box>
          <Box width={1/2}>
            <Button
              operator={operator}
              handleKeyPress={handleKeyPress}
              value="x"
              id="multiply"
              type="operator"
              color={theme.dark}
            />
          </Box>
          <Box width={1/2}>
            <Button
              operator={operator}
              handleKeyPress={handleKeyPress}
              value="÷"
              id="divide"
              type="operator"
              color={theme.dark}
            />
          </Box>
          <Box width={1/2}>
            <Button
              operator={operator}
              handleKeyPress={handleKeyPress}
              value={clearIcon}
              id="clear"
              type="clear"
              color={theme.secondary}
            />
          </Box>
          <Box width={1/2}>
            <Button
              operator={operator}
              handleKeyPress={handleKeyPress}
              value="="
              id="equals"
              type="equals"
              color={theme.dark}
            />
          </Box>
        </Flex>
      </NumberPadWrapper>
    );
  }
}

export default withTheme(NumberPad);
