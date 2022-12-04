import React, { Component } from 'react'

// render props is a technique for sharing a code between react components using props whose value is a function 

class User extends Component {
  render() {
    return (
      <div>{this.props.render(true)}</div>
    )
  }
}

export default User