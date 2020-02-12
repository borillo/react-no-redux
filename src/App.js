import React, { useReducer, useContext, createContext } from 'react';
import './App.css';

const initialState = {
  count: 0,
}

const incrementCount = dispatch => {
  dispatch({
    type: 'INCREMENT'
  })
}

const counterReducer = (state, action) => {
  return {
    ...state,
    count: state.count + 1,
  }
}

const Counter = ({onIncrement, count}) => {

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrement}>Increment</button>
    </div>
  )
}

const OutsideIncrement = ({incrementCount}) => {
  return(
    <button onClick={incrementCount}>Increment from outside</button>
  )
}

const useCounterContext = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState)
  
  return [state, dispatch]
}

const App = () => {

  const [state, dispatch] = useCounterContext(counterReducer, initialState)

  const handleIncrement = () => {
    incrementCount(dispatch)
  }

  return (
    <div className="App">
      <Counter onIncrement={handleIncrement} count={state.count}/>
      <OutsideIncrement incrementCount={handleIncrement}/>
    </div>
  );
}

export default App