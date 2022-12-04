// what pure components are for class components, memo are for functional components 

// will use memo in this functional component 
// its parent component is class component 

import React from 'react'

function Memo({name}) {
    console.log("memodemo")
  return (
    <div>{name}</div>
  )
}

export default React.memo(Memo)  //method to use memo 