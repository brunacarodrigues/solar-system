import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          {planets.map(({ name, image }) => (
            <PlanetCard
              className={ name }
              key={ name }
              planetName={ name }
              planetImage={ image }
            />))}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
