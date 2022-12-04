

// Props Example using functional component 

import React from 'react'

function Greetings (props) {
    
const {name , lastName , update} = props // this is for destructuring of props
// imilar syntax for destructuring of state =  const {state1, state2} = this.state  

    return (
        <div>
            <h1>Hello {name} {lastName}</h1>
            <p> Welcome {name} to React Series</p>
            {update}
            <br />
            <button>Click to Enroll</button>
            
        </div>
    )
}

export default Greetings 


// const Greetings = () => <h1> Hello Rootu <h1/>   // another way to write using arrow function  