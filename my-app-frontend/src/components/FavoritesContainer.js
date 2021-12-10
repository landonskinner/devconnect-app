import React, { useState, useEffect } from 'react';
import Post from './Post';
import FavoritePost from './FavoritePost';


function FavoritesContainer({ search, loginId }) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/favorites')
        .then(resp => resp.json())
        .then((posts) => {
            const favs = posts.filter(post => post.user_id === loginId)
            setPosts(favs)
        })
    }, [])

    const filteredPosts = posts.filter(post => {
        return post.post.header.includes(search)
    });
    console.log(posts)
    console.log(search)
    const renderPosts = filteredPosts.map(fav => {
        return <FavoritePost key={fav.id} fav={fav} loginId={loginId}/>
    })



    return (
        <div>
            {renderPosts}
        </div>
    )
}


export default FavoritesContainer;