import React, { Component } from 'react'
// import ChildComponent from './ChildComponent'
import ErrorHandling from '../ErrorHandling'
import ErrorHandlingChildComp from '../ErrorHandlingChildComp'

 class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first:'kothrud',
         last: 'Pune'
      }
    }
  render() {
    return (
      <div>ParentComponent  
       {/* <ChildComponent name={this.state.first} lastName= {this.state.last}/> */}
       <ErrorHandling>
       <ErrorHandlingChildComp heroName="Superman"/>
       </ErrorHandling>
       <ErrorHandling>
       <ErrorHandlingChildComp heroName="Batman"/>
       </ErrorHandling>
       <ErrorHandling>
       <ErrorHandlingChildComp heroName="Joker"/>
       </ErrorHandling>
       
      </div>
    )
  }
}


export default ParentComponent