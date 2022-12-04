// Props using class component 


import React, { Component } from 'react'

class Greetings extends Component {
    render() {

        const {name , lastName , update} =  this.props
        /* similar syntax for state destructuring =  const {state1, state2} = this.state           */
        return (
        <div>
         <h1> Hello {name} {lastName}</h1>
         <p> Welcome {name} to React Series</p>
         {update}
         <br />
         <button>Click to Enroll</button>        
          
         
         
         </div>
        )
        

    }
}


export default Greetings







 