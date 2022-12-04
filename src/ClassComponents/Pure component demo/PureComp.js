import React, { PureComponent } from 'react'

// so the difference between regular class component and pure class component is that regular component always/by default
// returns true while re-rendering after some changes in states or props. 
// but pure component always checks for changes made to the states and props and if there are changes only then it re-renders 
//the component by returning true in the shouldComponentUpdate method 


//pure components prevent unnecessary re-renders and give performance boost in certain scenarios
// PURE COMPONENTS ONLY WORK IN CLASS COMPONENTS 

 class PureComp extends PureComponent {
  render() {
    console.log("pure compo rendered")
    return (
      <div>PureComponent {this.props.name}</div>
    )
  }
}

export default PureComp