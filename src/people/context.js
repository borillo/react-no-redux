import {useReducer} from 'react'
import {counterReducer, initialState} from './reducer'

const usePeopleContext = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return [state, dispatch];
};

export { usePeopleContext };
