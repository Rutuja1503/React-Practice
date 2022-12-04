import axios from 'axios'
import React, { useEffect, useState } from 'react'
//fetching data in useEffect on onChange event in input field 
// fetching individual post by passing in id of a user 

function FetchDataOnChange() {
     
    const[post,setPost] = useState({})
    const[id,setId] = useState(1)

    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then( res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[id])  //id will change so mention it in empty dependency to check for changes and render them on browser 


  return (
    <div>
    <div>{post.title}</div>
    {/* controlled input field means we assign value and onChange event to it */}
    <input type="text" value={id}  onChange={e => setId(e.target.value)}/>
    </div>
  )
}

export default FetchDataOnChange