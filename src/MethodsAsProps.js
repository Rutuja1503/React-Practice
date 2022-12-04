import React, { Component } from 'react'


// -- passing methods as props 
// when do we do it ? - when child component wants to communicate with parent component we pass methods as props  
// for e.g if i click on button in child component, i want to execute a method which is in parent component 

export class MethodsAsProps extends Component {
  render() {
    return (
      <div>MethodsAsProps</div>
    )
  }
}

export default MethodsAsProps