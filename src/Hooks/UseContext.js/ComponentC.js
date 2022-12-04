//    <App/>
//       |
// <ComponentA/>
//       |
// <ComponentB/>
//       |
// <ComponentC/>

// this is our last nested child component
// steps --> creating a context , providing context value , consuming context value 
// usecontext() only makes consuming step simpler 


// step 1 -- createContext in parent component
// step 2 -- wrapping with Provider in parent component only
// setp 3 -- useContext in child component where you want to pass your data 


import React, { useContext } from 'react'
import {data1 , data2} from '../../App'

function ComponentC() {

    const myName = useContext(data1)
    const myGender =useContext(data2)

  return (
    <div>
     Hey I'm {myName}. I'm {myGender}.
    </div>
  )
}

export default ComponentC