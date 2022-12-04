import React from 'react'
import PropsChild from './PropsChild'

function PropsParent() {
    return(
        <div>
            <PropsChild name="John" profession="Web Developer">
                <p>  Welcome to the series </p>
            </PropsChild>
            <PropsChild name="Joe" profession="Data Scientist"/>
        </div>
    )
}

export default PropsParent