// this is our container component where we implement common functionality between react components
// in our example common code between clickCounter and HoverCounter components 

import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count: 0 
        }
      }
  
      incrementCount = () => {
          this.setState((prevState) => {
              return {count : prevState.count + 1}
          })
      }  //this is common code between clickCounter and HoverCounter 
  render() {
    return (
      <div>
       {/* pass 2 arguments to props(argu1,argu2) */}
        {this.props.name(this.state.count,this.incrementCount)}   
      </div>
    )
  }
}

export default Counter