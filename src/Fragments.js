// Fragments in react -- they let you group a list of children elements without adding special notes to the dom 
//i.e. if we add div tag to wrap jsx then it will add extra div tag in the browser console 
//so we use fragments to remove that unnecessary div tag 
// so we use <React.Fragment><React.Fragment/> to wrap jsx 
// no matter what you write in jsx, how many children components you make, always use fragments to wrap jsx
// {key=} is the only attribute that can be passed to the fragment 



import React from 'react'
// shorthand syntax for fragments is <> </> . but if we use this then we cannot pass key attribute to list rendering 
function Fragments() {
     const items = []
    return (
        <React.Fragment>
        {
            items.map( item => (
                <React.Fragment key={item.id}>
                <h1>title</h1>
                <p>{item.title}</p>
                </React.Fragment>
            ))
        }
        </React.Fragment>
    
    )
}
            export default Fragments