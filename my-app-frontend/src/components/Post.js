import {useEffect, useState} from 'react'

function Post({post:{id, header, description, img, content, likes, user_id}}) {
    
    const [username, setUsername] = useState("")

    useEffect(() => {
        fetch(`http://localhost:4000/users/${id}`)
        .then(resp => resp.json())
        .then(data => setUsername(data.username))
    }, []) 
    
    return (
        <div>
            <h2>{header}</h2>
            <h3>{description}</h3>
            <img src={img}/>
            <p>By: {username}</p>
            <p>{content}</p>
            <p>Likes: {likes}</p>
            <p>Comments:</p>
        </div>
    )
}

export default Post
