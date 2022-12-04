import React, { Component , PureComponent} from 'react'

// import Memo from './Memo'
// import NormalComponent from './NormalComponent'
// import PureComp from './PureComp'


// so instead of creating new pure component as parent component, we will make
// parent component a pure component by importing purecomponent from react 

class ParentComponent extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            name: "Vishwas"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Vishwas"
            })
        }, 2000)
    }


    render() {
        console.log("parent compo rendered")
        return (
            <>
                <div>ParentComponent</div>
                {/* <NormalComponent name={this.state.name}/> */}
                {/* <PureComp name={this.state.name}/> */}
                {/* <Memo name={this.state.name}/> */}
                

            </>
        )
    }
}

export default ParentComponent