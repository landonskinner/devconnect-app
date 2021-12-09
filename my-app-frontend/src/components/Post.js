import { useEffect, useState } from "react";

import styled from "styled-components";

import "../Post.css";

function Post({
  post: { id, header, description, image_url, content_link, like_count, user_id, created_at}, loginId}) {
  const [userInfo, setUserInfo] = useState("");
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:9292/users/${user_id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setUserInfo({
          username: data[0].username,
          img: data[0].image_url,
        });
      });
  }, [user_id]);



    const handleClick = () => {
      console.log('hello')
      fetch('http://localhost:9292/favorites', {
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({
          user_id: loginId,
          post_id: id 
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
          return (post.user_id === loginId) && (post.post_id === id)
        })
        
        if (var1 !== []) {
          var1.forEach(fav => {
            fetch(`http://localhost:9292/favorites/${fav.id}`, {
              method: 'DELETE'
            })
            .then(resp => resp.json())
            .then(data => console.log(data))
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
          <a href={content_link} target="_blank">
          <div className="mock-img-all">
            <div className="mock-img">
              <img src={image_url}/>
            </div>
            <div className="mock-title">
              <div className="mock-title2">
                <div className="mock-title-top">
                  <p>{header}</p>
                </div>
                <div className="mock-title-mid">Description: {description}</div>
              </div>
            </div>
          </div>
          </a>
          <p>♡ {like_count}</p>
        </div>
      </div>
    </PostCard>
  );
}

export default Post;

const PostCard = styled.div`
  border: 3px solid black;
  position: relative;
  margin: 15px;
  margin-left: 30%;
  margin-right: 30%;
  border-radius: 20px;
  padding: 7px;
  box-shadow: 10px 10px grey;
  background: white;
`;

