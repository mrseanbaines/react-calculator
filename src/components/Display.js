import React, { Component } from 'react';
import History from './History';
import Total from './Total';

class Display extends Component {
  render() {
    return (
      <div>
        <History />
        <Total />
      </div>
    );
  }
}

export default Display;
