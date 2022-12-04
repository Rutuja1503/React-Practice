import React from 'react'

function ErrorHandlingChildComp({heroName}) {
    if(heroName === 'Joker'){
        throw new Error ('not a superhero')
    }
  return (
    <div>{heroName}</div>
  )
}

export default ErrorHandlingChildComp