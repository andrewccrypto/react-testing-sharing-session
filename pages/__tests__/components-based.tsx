import userEvent from "@testing-library/user-event";
import { fireEvent, render } from "@testing-library/react";
import { setIconOptions } from "@fluentui/react/lib/Styling";
import useQueryPokemon from "@hooks/useQueryPokemon";
import ComponentsBasedPage from "../components-based";

setIconOptions({ disableWarnings: true });

jest.mock("@hooks/useQueryPokemon", () => ({
  __esModule: true,
  default: jest.fn(() => ({ data: [], isLoading: false, hasError: false })),
}));

describe("ComponentsBasedPage", () => {
  it("Should support searching querying by name", () => {
    const { getByPlaceholderText, getByRole } = render(<ComponentsBasedPage />);
    expect(getByPlaceholderText("Search Pokemon name")).toHaveValue("");

    userEvent.type(getByPlaceholderText("Search Pokemon name"), "charizard");

    expect(getByPlaceholderText("Search Pokemon name")).toHaveValue(
      "charizard"
    );

    userEvent.click(getByRole("button", { name: /Search/ }));

    expect(useQueryPokemon).toHaveBeenLastCalledWith({
      name: "charizard",
      sort: null,
    });
  });

  it("Should support changing sorting", () => {
    const { getByLabelText, getByRole } = render(<ComponentsBasedPage />);

    userEvent.click(getByLabelText("Sort by"));

    // Unable to use userEvent.click here
    fireEvent.click(getByRole("option", { name: /ID Desc/ }));

    userEvent.click(getByRole("button", { name: /Search/ }));

    expect(useQueryPokemon).toHaveBeenLastCalledWith({
      name: null,
      sort: "id-desc",
    });
  });

  it("Should support resetting search parameters", () => {
    const { getByLabelText, getByPlaceholderText, getByRole } = render(
      <ComponentsBasedPage />
    );

    userEvent.click(getByLabelText("Sort by"));

    // Unable to use userEvent.click here
    fireEvent.click(getByRole("option", { name: /ID Desc/ }));

    userEvent.type(getByPlaceholderText("Search Pokemon name"), "charizard");

    expect(getByPlaceholderText("Search Pokemon name")).toHaveValue(
      "charizard"
    );

    userEvent.click(getByRole("button", { name: /Search/ }));

    expect(useQueryPokemon).toHaveBeenLastCalledWith({
      name: "charizard",
      sort: "id-desc",
    });

    userEvent.click(getByRole("button", { name: /Reset/ }));

    expect(useQueryPokemon).toHaveBeenLastCalledWith({
      name: null,
      sort: null,
    });
  });
});
