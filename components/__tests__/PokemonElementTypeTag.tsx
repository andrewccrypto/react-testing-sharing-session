import { render } from "@testing-library/react";
import PokemonElementTypeTag from "@components/PokemonElementTypeTag";
import { PokemonElementGrass } from "@types";

describe("PokemonElementTypeTag", () => {
  it("Should handle Grass element type", () => {
    const { container } = render(
      <PokemonElementTypeTag element={PokemonElementGrass} />
    );

    expect(container).toMatchSnapshot();
  });
});
