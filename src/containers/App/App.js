import React, { Component } from 'react';
import SayHello from './../../components/SayHello/SayHello';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <SayHello />
      </div>
    )
  }
}

App.propTypes = {};

App.defaultProps = {};