import React from 'react'
import { useState } from 'react'

function OnChangeEventDemo(){


    const[oldValue,newValues] = useState([])

    let VarToStoreNewValues = ''

    const handleChange = (e) =>{

        VarToStoreNewValues = e.target.value
    }

    const handleSubmit = (e) => {
        e.preventDafault()
        newValues([...oldValue,VarToStoreNewValues])
    }



    return(
        <div>{
            <form type="form">

            <input type="text" placeholder='Type your name' onChange={handleChange}/>
            <hr />
            <input type="email" placeholder='Type your email' onChange={handleChange}/>
            <hr />
            <input type="number" placeholder='Type your contact info' onChange={handleChange}/>
            <hr />
            <button onClick={handleSubmit}>Click</button>


            </form>
        }
        {
            oldValue.map( function myFun(data,i) {
                     return <li key={i}>{data}</li>
            }

            )
        }
        </div>
    )
}


export default OnChangeEventDemo