import React, { Component } from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Title headline="Planetas" />
      </div>
    );
  }
}

export default App;
