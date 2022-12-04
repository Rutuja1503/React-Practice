// state in class component 

import React, { Component } from 'react'

class Change extends Component {
    constructor() {
        super() 

        this.state = { name : "Rootu"}
    }

    ChangeName() {
        this.setState({
            name : "Namrata"
        })
    }


    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={ () => this.ChangeName()}> Click to change</button>
            </div>
        )
    }
}

export default Change