import React from 'react'
import { useState } from 'react'

function DemoPractice() {
    const [text, setText] = useState([])
    let values  //variable which stores new added values 
    const handlechange = (e) => {   // this function takes all new added values and passes to the values variable    
        values = e.target.value    
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setText([...text, values])  // similar to  - setcount(count+1)  // setText takes an array to show old and new added values
    }                                  // such as ([...text, values])
    return (
        <>
            {/* <form action=""  onSubmit={handleSubmit}> */}
                <input type="text" onChange={handlechange} />  
                {/* this handlechange is an arrow function which we have to define to change the event  */}
                <button onClick={handleSubmit}>click</button>
                {/* this handlesubmit is an arrow function which we have to define to change the event  */}
            {/* </form> */}
            {
                text.map(function data(data,i){
                     return <li key={i}>{data}</li>
                })
            }
        </>
    )
}

export default DemoPractice