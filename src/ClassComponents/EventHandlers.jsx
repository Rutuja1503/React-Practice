import React, { Component } from 'react'


class EventHandlers extends Component{ 
    

    eventChanged(){
        document.write("Event has been changed.")
    }

    render(){
        return(
            <div>
                <button onClick={this.eventChanged}>Click</button>
            </div>
        )
    }
}


export default EventHandlers