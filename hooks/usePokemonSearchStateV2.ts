import { useReducer, useState } from 'react';
import { UseQueryPokemonParams } from '@hooks/useQueryPokemon';

interface UsePokemonSearchStateV2ReducerState {
  queryParams: UseQueryPokemonParams;
  searchTerm: string;
  sort: UseQueryPokemonParams['sort'];
}

const initState: UsePokemonSearchStateV2ReducerState = {
  queryParams: { name: null, sort: null },
  searchTerm: '',
  sort: null,
};

const ON_RESET = 'ON_RESET';

const ON_SEARCH_TERM_CHANGE = 'ON_SEARCH_TERM_CHANGE';

const ON_SORT_CHANGE = 'ON_SORT_CHANGE';

const ON_SEARCH = 'ON_SEARCH';

interface OnResetAction {
  type: typeof ON_RESET;
}

interface OnSearchTermChangeAction {
  type: typeof ON_SEARCH_TERM_CHANGE;
  value: string;
}

interface OnSortChangeAction {
  type: typeof ON_SORT_CHANGE;
  value: UseQueryPokemonParams['sort'];
}

interface OnSearchAction {
  type: typeof ON_SEARCH;
}

type UsePokemonSearchStateV2ReducerAction =
  | OnResetAction
  | OnSearchTermChangeAction
  | OnSortChangeAction
  | OnSearchAction;

function reducer(
  state: UsePokemonSearchStateV2ReducerState,
  action: UsePokemonSearchStateV2ReducerAction
): UsePokemonSearchStateV2ReducerState {
  switch (action.type) {
    case ON_RESET:
      return { ...initState };
    case ON_SEARCH_TERM_CHANGE:
      return { ...state, searchTerm: action.value };
    case ON_SORT_CHANGE:
      return { ...state, sort: action.value };
    case ON_SEARCH:
      return {
        ...state,
        queryParams: {
          ...state.queryParams,
          name: state.searchTerm,
          sort: state.sort,
        },
      };
    default:
      return { ...state };
  }
}

interface UsePokemonSearchStateV2Result {
  onReset(): void;
  onSearch(): void;
  onSearchTermChange(value: string): void;
  onSortChange(value: UseQueryPokemonParams['sort']): void;
  state: {
    queryParams: UseQueryPokemonParams;
    searchTerm: string;
    sort: UseQueryPokemonParams['sort'];
  };
}

function usePokemonSearchStateV2(): UsePokemonSearchStateV2Result {
  const [{ searchTerm, sort, queryParams }, dispatch] = useReducer(
    reducer,
    initState
  );

  return {
    onReset: (): void => dispatch({ type: ON_RESET }),
    onSearchTermChange: (v: string): void =>
      dispatch({ type: ON_SEARCH_TERM_CHANGE, value: v }),
    onSortChange: (v: UseQueryPokemonParams['sort']): void =>
      dispatch({ type: ON_SORT_CHANGE, value: v }),
    onSearch: (): void => dispatch({ type: ON_SEARCH }),
    state: { searchTerm, sort, queryParams },
  };
}
export default usePokemonSearchStateV2;
