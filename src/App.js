import React, { useReducer, useContext, createContext } from 'react';
import './App.css';

const initialState = {
  count: 0,
}

const counterReducer = (state, action) => {
  return {
    ...state,
    count: state.count + 1,
  }
}

const Counter = ({incrementCount, count}) => {

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  )
}

const OutsideIncrement = ({incrementCount}) => {
  return(
    <button onClick={incrementCount}>Increment from outside</button>
  )
}

const App = () => {

  const [state, dispatch] = useReducer(counterReducer, initialState)

  const incrementCount = () => {
    dispatch({
      type: 'INCREMENT'
    })
  }

  return (
    <div className="App">
      <Counter incrementCount={incrementCount} count={state.count}/>
      <OutsideIncrement incrementCount={incrementCount}/>
    </div>
  );
}

export default App