import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
// --> useeffect runs after every single render 
// --> useeffect is placed inside a component so that we can easily access component's state and props without writing 
// any additional code  

function UseEffectAfterRender() {
    const [num, setNum] = useState(0)
    
    //useeffect takes arrow function as its argument i.e.    useEffect( () => { })
    useEffect(() => {
        document.title = `clicked ${num} times`
    }
    )

    const Update = () => {
        setNum(prevNum => prevNum + 1)
    }
    return (
        <div>
            <button onClick={Update}> Clicked {num} times </button>
        </div>
    )
}

export default UseEffectAfterRender