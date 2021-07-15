import { render } from "@testing-library/react";
import PokemonDataCard from "@components/PokemonDataCard";
import {
  PokemonData,
  PokemonElementElectric,
  PokemonElementFairy,
  PokemonElementFire,
  PokemonElementGrass,
  PokemonElementGround,
  PokemonElementNormal,
  PokemonElementPoison,
  PokemonElementRock,
  PokemonElementSteel,
  PokemonElementWater,
} from "@types";

const charmander: PokemonData = {
  id: 4,
  name: "Charmander",
  imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  elementTypes: [PokemonElementFire],
  elementWeaknesses: [
    PokemonElementGround,
    PokemonElementRock,
    PokemonElementWater,
  ],
};

const jigglyPuff: PokemonData = {
  id: 39,
  name: "Jigglypuff",
  imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
  elementTypes: [PokemonElementNormal, PokemonElementFairy],
  elementWeaknesses: [PokemonElementSteel, PokemonElementPoison],
};

const magikarp: PokemonData = {
  id: 129,
  name: "Magikarp",
  imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
  elementTypes: [PokemonElementWater],
  elementWeaknesses: [PokemonElementGrass, PokemonElementElectric],
};

describe("PokemonDataCard", () => {
  it("Should display the Pokemon name", () => {
    const { getByText } = render(<PokemonDataCard data={charmander} />);
    expect(getByText("Charmander #004")).toBeInTheDocument();
  });

  it("Should handle displaying the Pokemon Id with zero padding", () => {
    const { getByText, rerender } = render(
      <PokemonDataCard data={charmander} />
    );
    expect(getByText("Charmander #004")).toBeInTheDocument();

    rerender(<PokemonDataCard data={jigglyPuff} />);

    expect(getByText("Jigglypuff #039")).toBeInTheDocument();

    rerender(<PokemonDataCard data={magikarp} />);

    expect(getByText("Magikarp #129")).toBeInTheDocument();
  });
});
