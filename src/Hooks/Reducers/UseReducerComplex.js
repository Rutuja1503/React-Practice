import React, { useReducer } from 'react'

//maintaining multiple variables in a single state object is suited when dealing with global state not with local state 

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (currentState, action) => {   //using currentState as an object we can keep track of multiple currentState variables 
    switch (action.type) {
        case 'increment':
            return { ...currentState, firstCounter: currentState.firstCounter + action.value }
        case 'decrement':
            return { ...currentState, firstCounter: currentState.firstCounter - action.value }
        case 'incrementTwo':
            return { ...currentState, secondCounter: currentState.secondCounter + action.value }//by using action as an object we 
        case 'decrementTwo':                                                                    // can pass additional data      
            return { ...currentState, secondCounter: currentState.secondCounter - action.value }//to the reducer function 

        case 'reset':
            return initialState
        default:
            return currentState

    }

}

function UseReducerComplex() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            First count - {count.firstCounter}
            Second count - {count.secondCounter}
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment by 1</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement by 1</button>
            <button onClick={() => dispatch({ type: 'incrementTwo', value: 1 })}>incrementTwo by 1</button>
            <button onClick={() => dispatch({ type: 'decrementTwo', value: 1 })}>decrementTwo by 1</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment by 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement by 5</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default UseReducerComplex