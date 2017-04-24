import React, { Component } from 'react';

import Header from './navbar/header';

export default class App extends Component {
  render() {
    return (
      <div className="outer-container">
        <Header />
      </div>
    );
  }
}
