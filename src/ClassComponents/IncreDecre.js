import React from 'react'
import { Component } from 'react';

class IncreDecre extends Component{
    constructor(){
        super()

        this.state = {
            count: 0 
        }
    }

    Increment(){
        this.setState({
            count : this.state.count + 10
        })
    }

    Decrement(){
        this.setState({
            count : this.state.count - 10
        })
    }

    reset(){
        this.setState({
            count : 0
        })
    }



    

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.Increment()}>Increment</button>
                <button onClick={() => this.Decrement()}>Decrement</button>
                <button onClick={() => this.reset()}>Reset</button>
            </div>
        )
    }
}

export default IncreDecre
