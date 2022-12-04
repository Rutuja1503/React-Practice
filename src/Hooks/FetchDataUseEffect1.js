import React, { useEffect, useState } from 'react'
import axios from 'axios'


function FetchDataUSeEffect1 (){

    const[posts,setPosts] = useState([])

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( res =>{
            console.log(res)
            setPosts(res.data) // to fetch data on browser 
        })
        .catch( err => {
            console.log(err)
        })
    },[])  // empty dependency so that the data will not re-render in a loop
    return(
        <div>
        <ul>
          {
            posts.map( post => (
                <li key={post.id}>{post.title}</li>
            ))
          }
          </ul>
        </div>
    )
}

export default FetchDataUSeEffect1