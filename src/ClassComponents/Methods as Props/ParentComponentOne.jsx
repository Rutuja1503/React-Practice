import React from 'react'
import { Component } from 'react'
// import Destructuring from '../Destructuring'
import MethodsAsProps from '../MethodsAsProps'
// import ChildComponentOne from './ChildComponentOne'


class ParentComponentOne extends Component {
          constructor(){
            super()

            this.state= {
                parent: "Papa"
            }

            

            this.greetParent = this.greetParent.bind(this) // don't forget to bind an event 
          }

          greetParent() {
                // this.setState({          //setState is one way to do it
                    // greet: "good morning parent"

                // }) 
                //another way to do it --
                document.write("Hello Parent") 
          }
            
          




    render() {
        return (
            <>

                {/* <ChildComponentOne name1="Meet" profession1="Web Developer" /> */}
                {/* <ChildComponentOne name2="Geet" profession2="Web Developer" /> */}
                {/* <Destructuring name="Sammy" profession="teacher"/> */}
                <MethodsAsProps greetP={this.greetParent}/>
            </>
        )
    }
}

export default ParentComponentOne



