import {useState, useEffect} from 'react'
import Post from "./Post"

function PostContainer() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/posts')
        .then(resp => resp.json())
        .then(data => setPosts(data))
    }, [])

    const renderPosts = posts.map(post => {
        return <Post key={post.id} post={post} />
    })


    return (
        <div>
            {renderPosts}
        </div>
    )
}

export default PostContainer
