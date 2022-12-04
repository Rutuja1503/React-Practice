import React from 'react'

function PropsChild(props) {


    return (
        <div>
           <p>Hey I am {props.name}. I am a {props.profession}</p>
           {props.childern}
           
        </div>
    )
}

export default PropsChild 



// destructuring of props 


// function practice (props)  {

//     const {name,profession} = props
//     return (
//         <p>Hey I am {name}. I am a {profession}</p>  
//     )
// }