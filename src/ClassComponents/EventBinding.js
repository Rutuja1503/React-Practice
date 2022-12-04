


import React, { Component } from 'react'

export class EventBinding extends Component {
  constructor() {
    super()
  
    this.state = {
       first : "hey"
    }
  }

  bindevents() {
    this.setState({
        first: "hello"
    })
  }

  render() {
    return (
      <div>
      <h1>{this.state.first}</h1>
        <button onClick={this.bindevents.bind(this)}>Click</button> 
        {/* this is 1st method to bind events ---- why do we bind events? bcz the this keyword will not define the object as undefined  */}
        {/* 2nd method - using arrow function -- onClick={() => this.bindevents()} */}
        {/* 3rd method - in the constructor -- constructor(){
            super()
            this.state = {
                first: "hello"} 
                this.bindevents = this.bindevents.bind(this) 
        }
        and onclick={this.bindevents} */}
        {/* 4th method - wrap bindevents in arrow function 
        bindevents() = () => {
            this.setState({
                first:"hello"
            })
        } */}
    
    
      </div>
    )
  }
}

export default EventBinding

