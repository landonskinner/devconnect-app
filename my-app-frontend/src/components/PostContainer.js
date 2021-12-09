import {useState, useEffect} from 'react'
import Post from "./Post"

function PostContainer({ search }) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/posts')
        .then(resp => resp.json())
        .then((posts) => setPosts(posts))
    }, [])

    const filteredPosts = posts.filter(post => {
        return post.header.includes(search)
    });
    console.log(posts)
    console.log(search)
    const renderPosts = filteredPosts.map(post => {
        return <Post key={post.id} post={post} />
    })



    return (
        <div>
            {renderPosts}
        </div>
    )
}

export default PostContainer
