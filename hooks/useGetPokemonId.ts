function useGetPokemonId(id: number): string {
  const idString = `${id}`;

  if (idString.length === 1) {
    return `#00${idString}`;
  }

  if (idString.length === 2) {
    return `#0${idString}`;
  }

  return `#${idString}`;
}

export default useGetPokemonId;
