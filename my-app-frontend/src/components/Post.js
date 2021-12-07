import {useEffect, useState} from 'react'
import styled from 'styled-components'

function Post({post:{id, header, description, img, content, likes, user_id}}) {
    
    const [userInfo, setUserInfo] = useState("")

    useEffect(() => {
        fetch(`http://localhost:4000/users/${user_id}`)
        .then(resp => resp.json())
        .then(data => {
            setUserInfo({
                username: data.username,
                img: data.img
            })
        })
    }, [user_id]) 
    
    return (
        <PostCard>
            <h2>{header}</h2>
            <h3>{description}</h3>
            <img src={img}/>
            <div className="author">
                <img src={userInfo.img} alt="profile photo" />
                <p>{userInfo.username}</p>                
            </div>
            <p>{content}</p>
            <p>♡ {likes}</p>
            <p>Comments:</p>
        </PostCard>
    )
}

export default Post

const PostCard = styled.div`

    border: 3px solid black;
    position: relative;
    margin: 15px;
    margin-left: 30%;
    margin-right: 30%;
    border-radius: 20px;
    padding: 7px;
    box-shadow: 10px 10px grey;
    

    * {
        margin: 0px;
        padding: 3px;
        
    }

    h2 {
        font-size: 24px;
    }

    .author {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .author img {
        height: 25px;
        width: 25px;
        border-radius: 25px;
        border: 1px solid black;
        padding: 0px;
        margin: 5px;
    }


`
