import { INCREMENT_START, INCREMENT_SUCCESS } from "./actions";

const initialState = {
  count: 0,
  isCalculating: false
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_START:
      return {
        ...state,
        isCalculating: true
      };
    case INCREMENT_SUCCESS:
      return {
        ...state,
        count: state.count + 1,
        isCalculating: false
      };
    default:
      return {
        ...state
      };
  }
};

export { counterReducer, initialState };
