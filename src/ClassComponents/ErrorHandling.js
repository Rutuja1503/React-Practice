// error handling is one of the methods of lifecycle methods 
// methods - static getDerivedStateFromProps(error), componentDidCatch(error,info)
// react unmounts the whole react component when there is runtime application error so this breaks the whole component 
//rendering on the browser 
// so error boundries catch the error in the component and display a fallback UI to it ,so it doesn't break the whole component 
//it's a class component which either of the methods of error handling and displays a a fallback ui
// if there's error in the component then error handling catches it and displays a fallback ui to it and and all other content in the 
// component renders on the browser they are now unaffected by the error



// e.g


import React, { Component } from 'react'

class ErrorHandling extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false  
      }
    }
// first method to catch an error
    static getDerivedStateFromProps(error){
        return {
            hasError: true 
        }
    }
    //second method to catch an error 

    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }
  render() {
       if(this.state.hasError){
        return <h1>Something went wrong</h1>
       }
    return (
        this.props.children
    )
      
    
  }
}

export default ErrorHandling