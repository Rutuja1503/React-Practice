// fetching data on button click rather than onChange event in input field 

import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FetchDataOnButtonClick() {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick= () => {
         setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick]) 
    return (
        <div>
            <button onClick={handleClick}>Fetch Data</button>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <div>{post.title}</div>
        </div>
    )
}

export default FetchDataOnButtonClick