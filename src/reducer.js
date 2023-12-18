import { combineReducers } from "redux";

import { paginationReducer } from "./reducer/paginationSlice";
import { toogleReducer } from "./reducer/toogleSlice";
import { pokemonsReducer } from "./reducer/pokemonsSlice";

export const rootReducer = combineReducers({
  pagination: paginationReducer,
  caughtPokemonsIds: toogleReducer,
  pokemons: pokemonsReducer,
});

//combineReducers

// {
//   pagination: { page: 3, pageSize: 12 }
//   pokemons: [...],
//   caughtPokemonsIds: ["1", "4", "5"];
// }
