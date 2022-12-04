import React from 'react'


function Destructuring ({name,profession}){  //this is how we destructure props 
    // another method to do it - 
    //      function fname(props) {
    //     const{name,profession}= props 
    //     return(
    //         <div>
    //             <p>hey {name}. I am {profession}</p>
    //         </div>
    //     )
    // }

    // same way we do it in class component too - 
    // const{name,profession} = this.props   note- write this in render()

    //similarly for destructuring states use same method - 

    // const {state1,state2} = this.state 
    
    
    return(
        <div>
            <p>Hey {name}. I am {profession}.</p>
        </div>
    )
}

export default Destructuring

