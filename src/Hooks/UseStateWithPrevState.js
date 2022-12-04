import React, { useState } from 'react'

function UseStateWithPrevState() {

    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for(let i=0 ; i<5 ; i++) {
            setCount(prevCount => prevCount+1)
        }
    }
    const incrementSeven = () => {
        for(let i=0 ; i<7 ;i++){    
            setCount(prevCount => prevCount+1)
        }
    }

    return (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={incrementSeven}>increment by 7</button>
            <button onClick={incrementFive}>increment by 5</button>
            <button onClick={ () => setCount(count+1)}>increment by 1</button>
            <button onClick={() =>setCount(initialCount)}>Reset</button>
        </div>
    )
}

export default UseStateWithPrevState