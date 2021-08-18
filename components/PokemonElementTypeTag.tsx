import { ReactElement } from 'react';
import {
  PokemonElement,
  PokemonElementBug,
  PokemonElementDark,
  PokemonElementDragon,
  PokemonElementElectric,
  PokemonElementFairy,
  PokemonElementFighting,
  PokemonElementFire,
  PokemonElementFlying,
  PokemonElementGhost,
  PokemonElementGrass,
  PokemonElementGround,
  PokemonElementIce,
  PokemonElementNormal,
  PokemonElementPoison,
  PokemonElementPsychic,
  PokemonElementRock,
  PokemonElementSteel,
  PokemonElementWater,
} from '@types';

interface PokemonElementTypeTagProps {
  element: PokemonElement;
}

function PokemonElementTypeTag({
  element,
}: PokemonElementTypeTagProps): ReactElement {
  function getBackgroundColor() {
    switch (element) {
      case PokemonElementBug:
        return '#A8B820';
      case PokemonElementDark:
        return '#705848';
      case PokemonElementDragon:
        return '#7038F8';
      case PokemonElementElectric:
        return '#F8D030';
      case PokemonElementFairy:
        return '#EE99AC';
      case PokemonElementFighting:
        return '#C03028';
      case PokemonElementFire:
        return '#F08030';
      case PokemonElementFlying:
        return '#A890F0';
      case PokemonElementGrass:
        return '#78C850';
      case PokemonElementGhost:
        return '#705898';
      case PokemonElementGround:
        return '#E0C068';
      case PokemonElementIce:
        return '#98D8D8';
      case PokemonElementNormal:
        return '#A8A878';
      case PokemonElementPoison:
        return '#A040A0';
      case PokemonElementPsychic:
        return '#F85888';
      case PokemonElementRock:
        return '#B8A038';
      case PokemonElementSteel:
        return '#B8B8D0';
      case PokemonElementWater:
        return '#6890F0';
    }
  }

  return (
    <div
      style={{
        backgroundColor: getBackgroundColor(),
        borderRadius: '5px',
        color: '#fff',
        display: 'inline-block',
        padding: '5px',
      }}
    >
      {element}
    </div>
  );
}

export default PokemonElementTypeTag;
