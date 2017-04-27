import React, { Component } from 'react';

import Header from './navbar/header';
import Gallery from './pin-it-gallery/gallery';

export default class App extends Component {
  render() {
    return (
      <div className="outer-container">
        <Header />
        <Gallery />
      </div>
    );
  }
}
