import React from 'react'
import { useState } from 'react'

//useState does not automatically merge and update the object, we have to do it manually 
// use spread operator to update 1st value of input when we write 2nd value -- bcz react does not do it by default 

function UseStateWithObj() {

    const [name , setName] = useState({ firstName:'' , lastName: ''})
  return (
    <div>
        <input type="text" value={name.firstName} onChange={e => setName({  ...name,firstName: e.target.value})}/>
        <input type="text" value={name.lastName} onChange={e => setName({...name,lastName: e.target.value})}/>
        {/* spread operator is used above because it will not empty the first input field when we enter value in second field  */}
        <h1>First name : {name.firstName}</h1>
        <h1>Last name : {name.lastName}</h1>
        {/* <h1>{JSON.stringify(name)}</h1>  to show object as a string on browser */}
    </div>
  )
}

export default UseStateWithObj