import { useEffect, useState } from "react";

import styled from "styled-components";

import "../Post.css";

function Post({
  post: { id, header, image_url, content, like_count, user_id, created_at},
}) {
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

    const handleClick = (e) => {
        // console.log(e.target.id)
        // post request to data base containing post id

        setIsFavorited(true)
    }

    // function timeSince(date) {

    //   var seconds = Math.floor((new Date() - date) / 1000);
    
    //   var interval = seconds / 31536000;
    
    //   if (interval > 1) {
    //     return Math.floor(interval) + " years";
    //   }
    //   interval = seconds / 2592000;
    //   if (interval > 1) {
    //     return Math.floor(interval) + " months";
    //   }
    //   interval = seconds / 86400;
    //   if (interval > 1) {
    //     return Math.floor(interval) + " days";
    //   }
    //   interval = seconds / 3600;
    //   if (interval > 1) {
    //     return Math.floor(interval) + " hours";
    //   }
    //   interval = seconds / 60;
    //   if (interval > 1) {
    //     return Math.floor(interval) + " minutes";
    //   }
    //   return Math.floor(seconds) + " seconds";
    // }
    // console.log(created_at)
    // var aDay = 24*60*60*1000;
    // console.log(timeSince(new Date(Date.now()-aDay)));
    // console.log(timeSince(new Date(Date.now()-aDay*2)));
// console.log(created_at)
// created_at.slice(11, 23)
  return (
    <PostCard>
      <div className="mock-outer">
        <div className="mock-inner">
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {isFavorited ? (
              <button
                onClick={() => setIsFavorited(false)}
                className="emoji-button favorite active"
              >
                ★
              </button>
            ) : (
              <button id={id}
                onClick={(e) => handleClick(e)}
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
              <img src={image_url}/>
            </div>
            <div className="mock-title">
              <div className="mock-title2">
                <div className="mock-title-top">
                  <p>{header}</p>
                </div>
                <div className="mock-title-mid">Description: {content}</div>
              </div>
            </div>
          </div>
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
`;