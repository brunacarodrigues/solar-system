import React, { Component } from 'react';
// import planets from '../data/planets';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
      </div>
    );
  }
}

export default SolarSystem;
