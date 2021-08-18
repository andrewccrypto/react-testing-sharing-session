import { useState } from 'react';
import { UseQueryPokemonParams } from '@hooks/useQueryPokemon';

interface UsePokemonSearchStateResult {
  onReset(): void;
  onSearch(): void;
  onSearchTermChange(value: string): void;
  onSortChange(value: UseQueryPokemonParams['sort']): void;
  state: {
    searchTerm: string;
    sort: UseQueryPokemonParams['sort'];
    queryParams: UseQueryPokemonParams;
  };
}

function usePokemonSearchState(): UsePokemonSearchStateResult {
  const [searchTerm, setSearchTerm] = useState('');
  const [sort, setSort] = useState<UseQueryPokemonParams['sort']>(null);
  const [queryParams, setQueryParams] = useState<UseQueryPokemonParams>({
    name: null,
    sort: null,
  });

  return {
    onReset: (): void => {
      setSearchTerm('');
      setSort(null);
      setQueryParams({ name: null, sort: null });
    },
    onSearchTermChange: (v: string): void => setSearchTerm(v),
    onSortChange: (v: UseQueryPokemonParams['sort']): void => setSort(v),
    onSearch: (): void =>
      setQueryParams({
        name: searchTerm || null,
        sort: sort || null,
      }),
    state: { searchTerm, sort, queryParams },
  };
}
export default usePokemonSearchState;
