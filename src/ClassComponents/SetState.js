import React, { Component } from 'react'

class SetState extends Component {
    constructor(){
        super() 

        this.state= {
            display: "Subscribe for more such videos"
        }
    }
    
     Subscribe(){
        this.setState({
            display: "Thank you for subscribing"
        })
     }
     




    render(){
        return(
            <div>
            <h1>{this.state.display}</h1>
             <button onClick={()=>this.Subscribe()}>Subscribe</button>
            </div>
        )
    }
}

export default SetState