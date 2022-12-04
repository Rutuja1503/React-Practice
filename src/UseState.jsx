import React, { useState } from 'react'

function UseState () {

     const[name, setName] = useState('Chris Evans')

      const setNameOne = () => {
             setName( prevName => 'Chris Hemsworth')
      }

    return (
        <div>
             <h1> Name: {name}</h1>
            <button onClick={setNameOne}>Click</button>
        </div>
    )
}

export default UseState