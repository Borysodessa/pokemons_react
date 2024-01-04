const initialState = {
  pageSize: 4,
  page: 1,
};
export function paginationReducer(state = initialState, action) {
  if (action.type === "INCREASE_PAGE") {
    return { ...state, page: state.page + 1 };
  }
  if (action.type === "DECREASE_PAGE") {
    return { ...state, page: state.page - 1 };
  }
  if (action.type === "CHANGE_PAGE_SIZE") {
    return { ...state, pageSize: action.etarget };
  }
  return state;
}
