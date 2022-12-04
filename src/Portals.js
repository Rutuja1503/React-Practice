// React portals provide a way to render childern into a dom node that exists outside a hierarchy of a parent component 
// in react every single component in our application falls under a dom tree i.e.<div id="root"> </div> 
// what portals provide is the ability to break out of this dom tree 
// so we can render a component onto a dom node that is not under this "root" element  
//ReactDOM.CreatePortal takes 2 parameters -- ReactDOM.CreatePortal(jsx,where to render this jsx)
// we can render any component be it app component or any other component in any dome node other than root dom node
//when to use portals -- when dealing with parent component's CSS when the child component is a modal,a popup or a tooltip. so that 
//the css of parent component and css of child component(i.e.modals,popups) don't mess up with each other. 


import React from 'react'
import ReactDOM from 'react-dom'
function Portals() {
  return ReactDOM.createPortal(
    <h1>Portals demo</h1>,
    document.getElementById('root-portal')
  )
}

export default Portals