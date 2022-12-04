
// event handling - onChange 

import React from 'react'
import { useState } from 'react'

function DemoPracticeTwo() {

    const [text, setText] = useState([])



    let data
    const functionOne = (e) => {
        data = e.target.value
    }

    const functionTwo = (e) => {
        e.preventDefault()
        setText([...text, data])
    }



    return (
        <>
            {
                <div>
                    <form action="">
                        <input type="text" onChange={functionOne} />
                        <button onClick={functionTwo}>Click</button>
                    </form>
                </div>
            }
            {
                text.map(function functionThree(dataOne, i) {
                    return <li key={i}>{dataOne}</li>
                })
            }
        </>
    )
}

export default DemoPracticeTwo

