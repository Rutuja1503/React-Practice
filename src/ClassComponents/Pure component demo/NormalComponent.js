import React, { Component } from 'react'

 class NormalComponent extends Component {
  render() {
    console.log("normal compo rendered")
    return (
      <div>NormalComponent{this.props.name}</div>
    )
  }
}

export default NormalComponent