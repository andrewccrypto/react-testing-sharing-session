import type { NextApiRequest, NextApiResponse } from "next";
import {
  PokemonData,
  PokemonElementElectric,
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
  PokemonElementWater,
} from "@types";

const data: PokemonData[] = [
  {
    id: 1,
    name: "Bulbasaur",
    imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
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
    name: "Charmander",
    imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    elementTypes: [PokemonElementFire],
    elementWeaknesses: [
      PokemonElementGround,
      PokemonElementRock,
      PokemonElementWater,
    ],
  },
  {
    id: 7,
    name: "Squirtle",
    imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    elementTypes: [PokemonElementWater],
    elementWeaknesses: [PokemonElementElectric, PokemonElementGrass],
  },
  {
    id: 16,
    name: "Pidgey",
    imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
    elementTypes: [PokemonElementNormal, PokemonElementFlying],
    elementWeaknesses: [
      PokemonElementElectric,
      PokemonElementIce,
      PokemonElementRock,
    ],
  },
  {
    id: 19,
    name: "Rattata",
    imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
    elementTypes: [PokemonElementNormal],
    elementWeaknesses: [PokemonElementFighting],
  },
];

function getPokemonHandler(req: NextApiRequest, res: NextApiResponse): void {
  if (req.method !== "GET") {
    res.status(404).end();
    return;
  }

  console.log("req.query", req.query);

  res.send({ data });
}

export default getPokemonHandler;
