import { useEffect, useReducer } from "react";
import { PokemonData } from "@types";

interface UseQueryPokemonReducerState {
  data: PokemonData[] | null;
  hasError: boolean;
  isLoading: boolean;
}

const initState: UseQueryPokemonReducerState = {
  data: null,
  hasError: false,
  isLoading: false,
};

const GET_PENDING = "GET_PENDING";

const GET_FULFILLED = "GET_FULFILLED";

const GET_REJECTED = "GET_REJECTED";

interface GetPendingAction {
  type: typeof GET_PENDING;
}

interface GetFufilledAction {
  data: PokemonData[];
  type: typeof GET_FULFILLED;
}

interface GetRejectedAction {
  type: typeof GET_REJECTED;
}

type UseQueryPokemonReducerAction =
  | GetPendingAction
  | GetFufilledAction
  | GetRejectedAction;

type UseQueryPokemonResult = UseQueryPokemonReducerState;

function reducer(
  state: UseQueryPokemonReducerState,
  action: UseQueryPokemonReducerAction
): UseQueryPokemonReducerState {
  switch (action.type) {
    case GET_PENDING:
      return { ...state, isLoading: true, hasError: false };
    case GET_FULFILLED:
      return { ...state, isLoading: false, data: action.data };
    case GET_REJECTED:
      return { ...state, isLoading: false, data: null, hasError: true };
    default:
      return { ...state };
  }
}

function useQueryPokemon(): UseQueryPokemonResult {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    async function getData(): Promise<void> {
      dispatch({ type: GET_PENDING });

      try {
        const response = await fetch("/api/pokemon");
        const { data } = await response.json();
        dispatch({ data, type: GET_FULFILLED });
      } catch (error) {
        dispatch({ type: GET_REJECTED });
      }
    }

    getData();
  }, []);

  return state;
}

export default useQueryPokemon;
