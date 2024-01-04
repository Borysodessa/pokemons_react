// import { combineReducers } from "redux";
import { paginationReducer } from "./reducer/paginationSlice";
import { toogleReducer } from "./reducer/toogleSlice";
import { pokemonsReducer } from "./reducer/pokemonsSlice";

// https://redux.js.org/api/combinereducers

export const rootReducer = function combineReducers({
  pagination: paginationReducer,
  caughtPokemonsIds: toogleReducer,
  pokemons: pokemonsReducer,
})

//combineReducers

// {
//   pagination: { page: 3, pageSize: 12 }
//   pokemons: [...],
//   caughtPokemonsIds: ["1", "4", "5"];
// }

// https://maxcode.dev/problems/group-by-equality
// https://maxcode.dev/problems/map-group-by

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
// https://maxcode.dev/courses/async
// race, simple-all, all
