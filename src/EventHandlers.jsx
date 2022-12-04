import React from 'react'
// events such as onClick , ondblClick , mouseHover etc. in a functional component 


function EventHandlers(){

function eventChanged(){
    document.write("Event has been changed :)")
}

    return(
        <div>
           <button onClick={eventChanged}>Click</button>
        </div>
    )
}

export default EventHandlers