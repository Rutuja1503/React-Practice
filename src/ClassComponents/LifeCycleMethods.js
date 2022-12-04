//lifecycle methods -- mounting , updating , unmounting , error handling 
// mounting methods - coustructor(props), static getDerivedStateFromProps(props,state) , render() , componentDidMount()
//updating methods - called when a component is re-rendered when there are changes made in props or states
//                 - static get getDerivedStateFromProps(props,state) , shouldComponentUpdate(nextProps,nextState),
//                   render(),getSnapshotBeforeUpdate(prevProps,prevState),componentDidUpdate(prevProps,prevStates,SnapshotValue) it's called when the component
//                   along with its children components are properly rendered themselves after the update
//                   snapshot value we get from rendering of getsnapshotbeforeupdate method 
//                   componentDidUpdate is called only once in re-render cycle. so we can do side-effects such as making ajax calls,
//                   interacting with dom 
//unmounting methods - componentWillUnmount() -- it is invoked immediately before a component is unmounted or destroyed 
//error handling method- static getDerivedStateFromError(), componentDidCatch(error,info) --invoked when there is error in rendering 
//in lifecycle method or in the constructor of a child component

import React from 'react'
import { Component } from 'react';

class LifecycleMethods extends Component {
    constructor() {
        super()
        
        this.state = {   //this.state can only be written in super(), on all other places we have to use this.setState
            message: ''

        }
        console.log("constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getderivedstatefromprops")
        return null 
        

    }
    

    componentDidMount() {
        console.log("componentdidmount")
    }

    shouldComponentUpdate(){
        console.log("shouldcomponentupdate")
        return true // it return is true it will re-render the component, if false then it will not re-render
        // it will compare prevState and prevProps with newState and newProps and if there are changes in between them then it will
        // re-render by returning true 
    }

    getSnapshotBeforeUpdate(prevState,prevProps){
        console.log("getsnapshotbeforeupdate")
    }

    componentDidUpdate(){
        console.log("componentdidupdate")
        return null 
    }

    handleChange() {
        this.setState({
            message: "Updated"
        })
    }

    render() {
        console.log("render")
        return (
            <div>
            <h1>hey</h1>
            <button onClick={this.handleChange}>click</button>
                
            </div>
        )
        
    }





}

export default LifecycleMethods