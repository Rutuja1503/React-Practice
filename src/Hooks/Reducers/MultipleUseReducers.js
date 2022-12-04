// multiple usereducers use --> when dealing with multiple state variables that have same state transitions i.e. same functionality 
//of changing their state, that time we should use this 
// with the help of reducer function we can change states of multiple variables which require same piece of code to execute  
// it will avoid the complexity of merging the state if it were to be an object 
// also prevents us from duplicating the code in reducer function 



import React from 'react'
import { useReducer } from 'react'
const initialState = 0
const reducer = (currentState, action) => {      //reducer accepts 2 values and returns 1 value  
  //action is an instruction to the reducer function to perform necessary task

  switch (action) {
    case 'increment':
      return currentState + 1
    case 'decrement':
      return currentState - 1
    case 'reset':
      return initialState
    default:
      return currentState


  }

}


function MultipleUseReducers() {
  //useReducer accepts 2 arguments
  const [count, dispatch] = useReducer(reducer, initialState)
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState) // arguments will remain same for same functionality 

  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <h2>Count - {countTwo} </h2>
      <button onClick={() => dispatchTwo('increment')}>Increment</button>
      <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
      <button onClick={() => dispatchTwo('reset')}>Reset</button>
    </div>
  )
}

export default MultipleUseReducers