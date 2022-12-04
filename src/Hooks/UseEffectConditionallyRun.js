import React from 'react'

//useeffect hook is run after every single render 
// in some cases applying useeffect after every single render might create a preformance problem 
// so we need to conditionally run and effect from a functional component 
// in order to conditionally run useeffect provide second parameter to useeffect and 
// specify which value you need to check before re-rendering 
// i.e. useeffect( () => {} , [count])  //here we check the count value if it is changed then useeffect will re-render 
// the component else it will not 

function UseEffectConditionallyRun() {
  return (
    <div>UseEffectConditionallyRun</div>
  )
}

export default UseEffectConditionallyRun