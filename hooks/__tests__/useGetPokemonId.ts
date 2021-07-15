import { renderHook } from "@testing-library/react-hooks";
import useGetPokemonId from "@hooks/useGetPokemonId";

describe("useGetPokemonId", () => {
  it("Should pad single digit ids", () => {
    const { result } = renderHook(() => useGetPokemonId(1));
    expect(result.current).toEqual("#001");
  });

  it("Should pad double digit ids", () => {
    const { result } = renderHook(() => useGetPokemonId(15));
    expect(result.current).toEqual("#015");
  });

  it("Should not pad triple digit ids", () => {
    const { result } = renderHook(() => useGetPokemonId(115));
    expect(result.current).toEqual("#115");
  });

  it("Should not pad ids with more than triple digits", () => {
    const { result } = renderHook(() => useGetPokemonId(1115));
    expect(result.current).toEqual("#1115");
  });
});
