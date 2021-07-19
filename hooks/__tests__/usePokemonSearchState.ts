import { act, renderHook } from "@testing-library/react-hooks";
import usePokemonSearchState from "@hooks/usePokemonSearchState";

describe("usePokemonSearchState", () => {
  it("Should allow changing `searchTerm` state", () => {
    const { result } = renderHook(() => usePokemonSearchState());

    expect(result.current.state.searchTerm).toEqual("");

    act(() => {
      result.current.onSearchTermChange("charmander");
    });

    expect(result.current.state.searchTerm).toEqual("charmander");
  });

  it("Should allow changing `sort` state", () => {
    const { result } = renderHook(() => usePokemonSearchState());

    expect(result.current.state.sort).toEqual(null);

    act(() => {
      result.current.onSortChange("name-asc");
    });

    expect(result.current.state.sort).toEqual("name-asc");
  });

  it("Should allow updating `queryParams` state", () => {
    const { result } = renderHook(() => usePokemonSearchState());

    expect(result.current.state.queryParams).toEqual({
      name: null,
      sort: null,
    });

    act(() => {
      result.current.onSearchTermChange("charmander");
      result.current.onSortChange("name-asc");
    });

    expect(result.current.state.searchTerm).toEqual("charmander");
    expect(result.current.state.sort).toEqual("name-asc");
    expect(result.current.state.queryParams).toEqual({
      name: null,
      sort: null,
    });

    act(() => {
      result.current.onSearch();
    });

    expect(result.current.state.queryParams).toEqual({
      name: "charmander",
      sort: "name-asc",
    });
  });

  it("Should allow resetting state", () => {
    const { result } = renderHook(() => usePokemonSearchState());

    expect(result.current.state.searchTerm).toEqual("");
    expect(result.current.state.sort).toEqual(null);
    expect(result.current.state.queryParams).toEqual({
      name: null,
      sort: null,
    });

    act(() => {
      result.current.onSearchTermChange("charmander");
      result.current.onSortChange("name-asc");
    });

    act(() => {
      result.current.onSearch();
    });

    expect(result.current.state.searchTerm).toEqual("charmander");
    expect(result.current.state.sort).toEqual("name-asc");
    expect(result.current.state.queryParams).toEqual({
      name: "charmander",
      sort: "name-asc",
    });

    act(() => {
      result.current.onReset();
    });

    expect(result.current.state.searchTerm).toEqual("");
    expect(result.current.state.sort).toEqual(null);
    expect(result.current.state.queryParams).toEqual({
      name: null,
      sort: null,
    });
  });
});
