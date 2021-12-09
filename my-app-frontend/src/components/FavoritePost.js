import { useEffect, useState } from "react";

import styled from "styled-components";

import "../Post.css";

function FavoritePost({
  fav: {id, user, post, user_id, post_id},
}) {
  const [userInfo, setUserInfo] = useState("");
  const [postInfo, setPostInfo] = useState("");
  const [isFavorited, setIsFavorited] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:9292/users/${post.user_id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setUserInfo({
          username: data[0].username,
          img: data[0].image_url,
        });
      });
    
    fetch(`http://localhost:9292/posts/${post_id}`)
    .then(resp => resp.json())
    .then(data => {
        setPostInfo({
            header: data[0].header,
            description: data[0].description,
            image_url: data[0].image_url,
            content: data[0].content,
            like_count: data[0].description,
            user_id: data[0].user_id
        })
    })
  }, [user_id]);

  const test_id = 4

    const handleClick = () => {
      console.log('hello')
      fetch('http://localhost:9292/favorites', {
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({
          user_id: test_id,
          post_id: post_id 
        }),
      })
      .then(res => res.json())
      .then(() => {
        console.log('success')
        setIsFavorited(true)
      })
  }

    

    const handleUnfavorite = (e) => {
      fetch('http://localhost:9292/favorites')
      .then(resp => resp.json())
      .then(data => {

        const var1 = data.filter(post => {
          return (post.user_id === test_id) && (post.post_id === post_id)
        })
        
        if (var1 !== []) {
          var1.forEach(fav => {
            fetch(`http://localhost:9292/favorites/${fav.id}`, {
              method: 'DELETE'
            })
            .then(resp => resp.json())
            .then(data => window.location.reload(false))
        })
      }
    })
      setIsFavorited(false)
      
    }

  return (
    <PostCard>
      <div className="mock-outer">
        <div className="mock-inner">
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {isFavorited ? (
              <button
                onClick={(e) => handleUnfavorite(e)}
                className="emoji-button favorite active"
              >
                ★
              </button>
            ) : (
              <button id={id}
                onClick={handleClick}
                className="emoji-button favorite"
              >
                ☆
              </button>
            )}
          </div>
          <div className="fb-group-picrow">
            <img src={userInfo.img} />
            <div className="fb-group-text-top">
              <div className="fb-group-text">
                <h5 className="fbh5">{userInfo.username}</h5>
                <span className="fb-group-date">Right Now</span>
              </div>
            </div>
          </div>
          <div className="mock-img-all">
            <div className="mock-img">
              <img src={postInfo.image_url}/>
            </div>
            <div className="mock-title">
              <div className="mock-title2">
                <div className="mock-title-top">
                  <p>{postInfo.header}</p>
                </div>
                <div className="mock-title-mid">Description: {postInfo.content}</div>
              </div>
            </div>
          </div>
          <p>♡ {postInfo.like_count}</p>
        </div>
      </div>
    </PostCard>
  );
}

export default FavoritePost;

const PostCard = styled.div`
  border: 3px solid black;
  position: relative;
  margin: 15px;
  margin-left: 30%;
  margin-right: 30%;
  border-radius: 20px;
  padding: 7px;
  box-shadow: 10px 10px grey;
`;
