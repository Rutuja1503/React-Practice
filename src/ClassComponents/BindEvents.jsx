import React, { Component } from 'react'

class BindEvents extends Component {
  constructor() {
    super() 

    this.state = {
      message: "Hello"
    }
    
  }

  clickToChange = () => {
    this.setState({
      message: "Goodbye!"
    }) // this method is known as event binding in class component // there are more 3 methods to do event binding, check them out 
  } 

  



  render() {

    return(
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickToChange}>Click me</button>
      </div>
    )
  }
}

export default BindEvents