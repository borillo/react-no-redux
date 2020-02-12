import { OBTAIN_LIST_START, OBTAIN_LIST_SUCCESS } from "./actions";

const initialState = {
  people: [],
  isLoading: false
};

const counterReducer = (state = initialState, action) => {
  
  console.log(action)

  switch (action.type) {
    case OBTAIN_LIST_START:
      return {
        ...state,
        isLoading: true
      };
    case OBTAIN_LIST_SUCCESS:
      return {
        ...state,
        people: action.payload,
        isLoading: false
      }
    default:
      return {
        ...state
      };
  }
};

export { counterReducer, initialState };
