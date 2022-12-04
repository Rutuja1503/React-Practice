import React, { useEffect, useState } from 'react'

//WE CAN USE MANY useEffects IN ONE COMPONENT 

function UseEffectWithDependency() {

    const[count,SetCount] = useState(0)

    const tick = () => {
        SetCount(count+1)  // instead of providing empty dependency we use prevState e.g. SetCount( prevState => prevState + 1)
    }

    useEffect( () => {

        function doSomething() {
            console.log('someprops')
        }
        doSomething()   // we can define a function within useEffect, mention its props in  empty dependency
        const interval = setInterval( tick , 1000) 

        return () => {
            clearInterval(interval)
        }
    },[someprops])  // if we provide empty dependency then it will not check for changes and will not update changes in state or props
    // in our component which will cause problem // se we have to mention the state variable whose state is changed in the component 
  return (
    <div>
        {count}
    </div>
  )
}

export default UseEffectWithDependency