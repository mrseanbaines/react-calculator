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
  render() {
    return (
      <NumberPadWrapper flexWrap="wrap">
        <Flex flexWrap="wrap" width={3/5}>
          <Box width={1/3}>
            <Button
              updateDisplay={this.props.updateDisplay}
              value={7}
              id="seven"
              type="number"
              color={this.props.theme.light}
            />
          </Box>
          <Box width={1/3}>
            <Button
              updateDisplay={this.props.updateDisplay}
              value={8}
              id="eight"
              type="number"
              color={this.props.theme.light}
            />
          </Box>
          <Box width={1/3}>
            <Button
              updateDisplay={this.props.updateDisplay}
              value={9}
              id="nine"
              type="number"
              color={this.props.theme.light}
            />
          </Box>
          <Box width={1/3}>
            <Button
              updateDisplay={this.props.updateDisplay}
              value={4}
              id="four"
              type="number"
              color={this.props.theme.light}
            />
          </Box>
          <Box width={1/3}>
            <Button
              updateDisplay={this.props.updateDisplay}
              value={5}
              id="five"
              type="number"
              color={this.props.theme.light}
            />
          </Box>
          <Box width={1/3}>
            <Button
              updateDisplay={this.props.updateDisplay}
              value={6}
              id="six"
              type="number"
              color={this.props.theme.light}
            />
          </Box>
          <Box width={1/3}>
            <Button
              updateDisplay={this.props.updateDisplay}
              value={1}
              id="one"
              type="number"
              color={this.props.theme.light}
            />
          </Box>
          <Box width={1/3}>
            <Button
              updateDisplay={this.props.updateDisplay}
              value={2}
              id="two"
              type="number"
              color={this.props.theme.light}
            />
          </Box>
          <Box width={1/3}>
            <Button
              updateDisplay={this.props.updateDisplay}
              value={3}
              id="three"
              type="number"
              color={this.props.theme.light}
            />
          </Box>
          <Box width={1/3}>
            <Button
              updateDisplay={this.props.updateDisplay}
              value={0}
              id="zero"
              type="number"
              color={this.props.theme.light}
            />
          </Box>
          <Box width={1/3}>
            <Button
              updateDisplay={this.props.updateDisplay}
              value="."
              id="decimal"
              type="number"
              color={this.props.theme.light}
            />
          </Box>
          <Box width={1/3}>
            <Button
              updateDisplay={this.props.updateDisplay}
              value={backIcon}
              id="back"
              type="back"
              color={this.props.theme.dark}
            />
          </Box>
        </Flex>

        <Flex flexWrap="wrap" width={2/5}>
          <Box width={1/2}>
            <Button
              updateDisplay={this.props.updateDisplay}
              value="+/-"
              id="plusMinus"
              type="operator"
              color={this.props.theme.dark}
            />
          </Box>
          <Box width={1/2}>
            <Button
              updateDisplay={this.props.updateDisplay}
              value="%"
              id="percent"
              type="operator"
              color={this.props.theme.dark}
            />
          </Box>
          <Box width={1/2}>
            <Button
              updateDisplay={this.props.updateDisplay}
              value="+"
              id="add"
              type="operator"
              color={this.props.theme.dark}
            />
          </Box>
          <Box width={1/2}>
            <Button
              updateDisplay={this.props.updateDisplay}
              value="-"
              id="subtract"
              type="operator"
              color={this.props.theme.dark}
            />
          </Box>
          <Box width={1/2}>
            <Button
              updateDisplay={this.props.updateDisplay}
              value="x"
              id="multiply"
              type="operator"
              color={this.props.theme.dark}
            />
          </Box>
          <Box width={1/2}>
            <Button
              updateDisplay={this.props.updateDisplay}
              value="÷"
              id="divide"
              type="operator"
              color={this.props.theme.dark}
            />
          </Box>
          <Box width={1/2}>
            <Button
              updateDisplay={this.props.updateDisplay}
              value={clearIcon}
              id="clear"
              type="clear"
              color={this.props.theme.secondary}
            />
          </Box>
          <Box width={1/2}>
            <Button
              updateDisplay={this.props.updateDisplay}
              value="="
              id="equals"
              type="operator"
              color={this.props.theme.dark}
            />
          </Box>
        </Flex>
      </NumberPadWrapper>
    );
  }
}

export default withTheme(NumberPad);
