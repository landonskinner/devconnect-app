import {useState, useEffect} from 'react'
import Post from "./Post"

function AccountPostContainer({ loginId, page, search }) {

    const [posts, setPosts] = useState([])

    
    useEffect(() => {
            fetch(`https://devconnect-backend-server.herokuapp.com/posts`)
            .then(resp => resp.json())
            .then((posts) => {
                setPosts(posts.filter(post => {
                    return post.user_id === loginId
                }))
            })
    }, [loginId])


    const filteredPosts = posts.filter(post => {
        return post.header.includes(search)
    });

    const renderPosts = filteredPosts.map(post => {

        return <Post key={post.id} post={post} />
    })



    return (
        <div>
            {renderPosts}
        </div>
    )
}

export default AccountPostContainer