import React, { Component } from 'react';
import { Header } from './Header';
import { Main } from './Main';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}
