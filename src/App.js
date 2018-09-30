import 'babel-polyfill';
import React, { Component } from 'react';
import Header from './components/Header';
import NavLeft from './components/NavLeft';

import './App.css';



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavLeft />
      </div>
    );
  }
}

export default App;
