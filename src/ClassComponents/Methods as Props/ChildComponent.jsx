import React from 'react'

const ChildComponent = (props) => {
    return (
        <div>ChildComponent
            <h1>{props.name} {props.lastName}</h1>
        </div>
    )
}

export default ChildComponent