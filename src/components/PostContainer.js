import {useState, useEffect} from 'react'
import Post from "./Post"

function PostContainer({ loginId, page, search }) {

    const [posts, setPosts] = useState([])

    

    
    useEffect(() => {
            fetch(`https://devconnect-backend-server.herokuapp.com/posts`)
            .then(resp => resp.json())
            .then((posts) => {
                setPosts(posts)
            })
    }, [])

    const filteredPosts = posts.filter(post => {
        return post.header.toLowerCase().includes(search.toLowerCase())
    });

    const renderPosts = filteredPosts.map(post => {
        return <Post key={post.id} post={post} loginId={loginId}/>
    })



    return (
        <div>
            {renderPosts}
        </div>
    )
}

export default PostContainer