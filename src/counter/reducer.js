import { INCREMENT } from "./actions";

const initialState = {
  count: 0
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    default:
      return {
        ...state
      };
  }
};

export { counterReducer, initialState };
