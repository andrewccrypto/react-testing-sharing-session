import type { NextApiRequest, NextApiResponse } from 'next';
import {
  PokemonData,
  PokemonElementElectric,
  PokemonElementFairy,
  PokemonElementFighting,
  PokemonElementFire,
  PokemonElementFlying,
  PokemonElementGrass,
  PokemonElementGround,
  PokemonElementIce,
  PokemonElementNormal,
  PokemonElementPoison,
  PokemonElementPsychic,
  PokemonElementRock,
  PokemonElementSteel,
  PokemonElementWater,
  PokemonDataSort,
} from '@types';

const data: PokemonData[] = [
  {
    id: 1,
    name: 'Bulbasaur',
    imgSrc: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    elementTypes: [PokemonElementGrass, PokemonElementPoison],
    elementWeaknesses: [
      PokemonElementFire,
      PokemonElementFlying,
      PokemonElementIce,
      PokemonElementPsychic,
    ],
  },
  {
    id: 4,
    name: 'Charmander',
    imgSrc: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    elementTypes: [PokemonElementFire],
    elementWeaknesses: [
      PokemonElementGround,
      PokemonElementRock,
      PokemonElementWater,
    ],
  },
  {
    id: 7,
    name: 'Squirtle',
    imgSrc: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    elementTypes: [PokemonElementWater],
    elementWeaknesses: [PokemonElementElectric, PokemonElementGrass],
  },
  {
    id: 16,
    name: 'Pidgey',
    imgSrc: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
    elementTypes: [PokemonElementNormal, PokemonElementFlying],
    elementWeaknesses: [
      PokemonElementElectric,
      PokemonElementIce,
      PokemonElementRock,
    ],
  },
  {
    id: 19,
    name: 'Rattata',
    imgSrc: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png',
    elementTypes: [PokemonElementNormal],
    elementWeaknesses: [PokemonElementFighting],
  },
  {
    id: 39,
    name: 'Jigglypuff',
    imgSrc: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png',
    elementTypes: [PokemonElementNormal, PokemonElementFairy],
    elementWeaknesses: [PokemonElementSteel, PokemonElementPoison],
  },
  {
    id: 129,
    name: 'Magikarp',
    imgSrc: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png',
    elementTypes: [PokemonElementWater],
    elementWeaknesses: [PokemonElementGrass, PokemonElementElectric],
  },
];

function sortData(
  sort: PokemonDataSort,
  unsorted: PokemonData[]
): PokemonData[] {
  const toSort = [...unsorted];

  toSort.sort((a, b) => {
    if (sort === 'id-asc') {
      return a.id - b.id;
    }

    if (sort === 'id-desc') {
      return b.id - a.id;
    }

    if (sort === 'name-asc') {
      return a.name.localeCompare(b.name);
    }

    return b.name.localeCompare(a.name);
  });

  return toSort;
}

async function getPokemonHandler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'GET') {
    res.status(404).end();
    return;
  }

  let responseData = [...data];

  if (req.query.name && !Array.isArray(req.query.name)) {
    const term = req.query.name.toLowerCase();

    responseData = responseData.filter(
      (v) => v.name.toLowerCase().indexOf(term) > -1
    );
  }

  if (req.query.sort && !Array.isArray(req.query.sort)) {
    responseData = sortData(req.query.sort as PokemonDataSort, responseData);
  } else {
    responseData = sortData('id-asc', responseData);
  }

  await new Promise((resolve) => setTimeout(resolve, 800));

  res.send({ data: responseData });
}

export default getPokemonHandler;
