import {useState, useEffect} from 'react'
import Post from "./Post"

function PostContainer({ id, page, search }) {

    const [posts, setPosts] = useState([])

    

    
    useEffect(() => {
        if (page === "profile") {
            fetch(`http://localhost:9292/posts/${id}`)
            .then(resp => resp.json())
            .then((posts) => setPosts(posts))
        } else if (page === "home") {
            fetch(`http://localhost:9292/posts`)
            .then(resp => resp.json())
            .then((posts) => setPosts(posts))
        }
    }, [id])

    // const filteredPosts = posts.filter(post => {
    //     return post.header.includes(search)
    // });
    console.log(posts)
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
