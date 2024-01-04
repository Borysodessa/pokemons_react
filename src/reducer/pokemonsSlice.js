const initialState = [];

export function pokemonsReducer(state = initialState, action) {
  if (action.type === "LOAD_POKEMONS") {
    return action.pokemons;
  }

  return state;
}
