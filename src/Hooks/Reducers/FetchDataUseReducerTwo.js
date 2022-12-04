import React from 'react'
import { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading : true ,
    error : '', 
    post : {}
}

const reducer = (state,action) => {
     switch(action.type) {
        case 'Fetchsuccess' : 
        return {
            loading : false,
            error : '',
            post : action.payload
        }
        case 'FetchError' : 
        return {
            loading : false, 
            error : 'Something went wrong',
            post: {}
        }
        default : 
        return state
     }
}

function FetchDataUseReducerTwo() {
   const[state, dispatch]= useReducer(reducer,initialState)
   useEffect( () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      dispatch( {type : 'Fetchsuccess' , payload: response.data})
    })
    .catch(error => {
     dispatch( {type : 'FetchError'})
    })
  }, []) 
   
  return (
    <div>
         {state.loading? 'loading' : state.post.title}
         {state.error? state.error : null}
    </div>
  )
  }


export default FetchDataUseReducerTwo



