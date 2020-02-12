import {useReducer} from 'react'
import {counterReducer, initialState} from './reducer'

const useCounterContext = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return [state, dispatch];
};

export { useCounterContext };
