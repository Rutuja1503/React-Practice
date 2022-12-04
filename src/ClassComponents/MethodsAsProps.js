import React, { Component } from 'react'

class MethodsAsProps extends Component {
    

    render(){
        return(
            <div>
            {/* <h1>{this.state.parent}</h1> */}
            <button onClick={this.props.greetP}>Click to Greet</button>
            </div>
        )
    }
}
export default MethodsAsProps 