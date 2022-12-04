import React ,{useReducer}from 'react'


const initialState = 0
const reducer = (currentState,action) => {      //reducer accepts 2 values and returns 1 value  
  //action is an instruction to the reducer function to perform necessary task

  switch(action) {
    case 'increment': 
    return currentState +1 
    case 'decrement':
      return currentState -1 
      case 'reset':
      return initialState
      default :
      return currentState 
      

  }

}


function UseReducerSimple() {
    //useReducer accepts 2 arguments
    const [count,dispatch] = useReducer(reducer,initialState)   // reducer is an arrow function and 
    // userreducer accepts 2 values[count,dispatch]
    // count is current value of our state and dispatch is a method which accepts an action(specified in reducer function) and executes 
    // the code written in reducer function 
    //
  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default UseReducerSimple