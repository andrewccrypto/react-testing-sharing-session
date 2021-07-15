import { render } from "@testing-library/react";
import PokemonElementTypeTag from "@components/PokemonElementTypeTag";
import { PokemonElementBug, PokemonElementGrass } from "@types";

describe("PokemonElementTypeTag", () => {
  it("Should handle Bug element type", () => {
    const { container } = render(
      <PokemonElementTypeTag element={PokemonElementBug} />
    );

    expect(container).toMatchSnapshot();
  });

  it("Should handle Grass element type", () => {
    const { container } = render(
      <PokemonElementTypeTag element={PokemonElementGrass} />
    );

    expect(container).toMatchSnapshot();
  });
});
