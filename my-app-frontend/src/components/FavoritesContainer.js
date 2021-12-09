import React, { useState, useEffect } from 'react';
import Post from './Post';
import FavoritePost from './FavoritePost';


function FavoritesContainer({ search }) {

    const [posts, setPosts] = useState([])

    const test_id = 4;

    useEffect(() => {
        fetch('http://localhost:9292/favorites')
        .then(resp => resp.json())
        .then((posts) => {
            const favs = posts.filter(post => post.user_id === test_id)
            setPosts(favs)
        })
    }, [])

    const filteredPosts = posts.filter(post => {
        return post.post.header.includes(search)
    });
    console.log(posts)
    console.log(search)
    const renderPosts = filteredPosts.map(fav => {
        return <FavoritePost key={fav.id} fav={fav} />
    })



    return (
        <div>
            {renderPosts}
        </div>
    )
}


export default FavoritesContainer;