import React from 'react'

const Counter = ({onIncrement, count}) => {

    return(
      <div>
        <h1>{count}</h1>
        <button onClick={onIncrement}>Increment</button>
      </div>
    )
  }

  export {Counter}