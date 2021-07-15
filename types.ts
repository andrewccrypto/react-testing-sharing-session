export const PokemonElementNormal = "normal";

export const PokemonElementFire = "fire";

export const PokemonElementWater = "water";

export const PokemonElementGrass = "grass";

export const PokemonElementElectric = "electric";

export const PokemonElementIce = "ice";

export const PokemonElementFighting = "fighting";

export const PokemonElementPoison = "poison";

export const PokemonElementGround = "ground";

export const PokemonElementFlying = "flying";

export const PokemonElementPsychic = "psychic";

export const PokemonElementBug = "bug";

export const PokemonElementRock = "rock";

export const PokemonElementGhost = "ghost";

export const PokemonElementDark = "dark";

export const PokemonElementDragon = "dragon";

export const PokemonElementSteel = "steel";

export const PokemonElementFairy = "fairy";

export type PokemonElement =
  | typeof PokemonElementNormal
  | typeof PokemonElementFire
  | typeof PokemonElementWater
  | typeof PokemonElementGrass
  | typeof PokemonElementElectric
  | typeof PokemonElementIce
  | typeof PokemonElementFighting
  | typeof PokemonElementPoison
  | typeof PokemonElementGround
  | typeof PokemonElementFlying
  | typeof PokemonElementPsychic
  | typeof PokemonElementBug
  | typeof PokemonElementRock
  | typeof PokemonElementGhost
  | typeof PokemonElementDark
  | typeof PokemonElementDragon
  | typeof PokemonElementSteel
  | typeof PokemonElementFairy;

export interface PokemonData {
  elementTypes: PokemonElement[];
  elementWeaknesses: PokemonElement[];
  id: number;
  imgSrc: string;
  name: string;
}

export type PokemonDataSort = "id-asc" | "id-desc" | "name-asc" | "name-desc";
