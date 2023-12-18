const initialState = ["1", "4", "5"];

export function toogleReducer(state = initialState, action) {
  if (action.type === "CAUGHT_TOOGLE") {
    return state.includes(action.id)
      ? state.filter((num) => num !== action.id)
      : [...state, action.id];
  }
  return state;
}
