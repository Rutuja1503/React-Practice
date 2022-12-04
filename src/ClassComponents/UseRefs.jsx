import React from 'react'
import { Component } from 'react';

// example of refs in uncontrolled form  

class UseRefs extends Component {
     handleSubmit = () => {
        console.log("Input value : " , this.input.value)
     }


    render() {

        return (
            <> 
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref={ (input) => this.input = input}/>
                <button type='submit'>Click</button>
                </form>
            </>
        )
    }
}

export default UseRefs 