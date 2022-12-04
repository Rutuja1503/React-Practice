
// cleanup is similar to componentWillUnmount in class component 
// it is used to stop the event being run in console even after removing it from browser 

import React, { useState } from 'react'
import RunEffectOnlyOnce from './RunEffectOnlyOnce'

function UseEffectWithCleanup() {
    const[display,setDisplay] = useState(true)
  return (
    <div>
        <button onClick={ () => setDisplay(!display)}>Click to clean</button>
        {display && <RunEffectOnlyOnce/>}
    </div>
  )
} 

export default UseEffectWithCleanup

