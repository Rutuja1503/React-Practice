import React, { useEffect, useState } from 'react'
// we pass empty dependency array[] to run it only once after rendering 
// it is similar to componentDidMount in class component

function RunEffectOnlyOnce() {

    const[X , setX] = useState(0)
    const[Y, setY] = useState(0)

    const updateMouseMove = e => {   //it's an arrow function 
        console.log('eventlistener run')
        setX(e.clientX)  
        setY(e.clientY)
    }


    useEffect( () => {
        console.log('useeffect run')  // this useeffect runs everytime the component is re-rendered, we need to avoid this 
        window.addEventListener('mousemove', updateMouseMove)  //(eventName,eventListener)

        return () => {
            window.removeEventListener('mousemove',updateMouseMove) //this will clean up the event from browser and will not run in
            //console too      //similar to componentWillUnmount 
        }
    },[]) //after passing empty dependency array, useeffect will run only once when the component is rendered 

  return (
    <div>
    
        X - {X}, Y- {Y}
    </div>
  )
}

export default RunEffectOnlyOnce