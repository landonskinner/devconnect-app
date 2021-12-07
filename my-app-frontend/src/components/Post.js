import {useEffect, useState} from 'react'

import styled from 'styled-components'

import '../Post.css'


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
            {/* <h2>{header}</h2>
            <h3>{description}</h3>
            <img src={img}/>
            <div className="author">
                <img src={userInfo.img} alt="profile photo" />
                <p>{userInfo.username}</p>                
            </div>
            <p>{content}</p>
            <p>♡ {likes}</p>
            <p>Comments:</p> */}

        <div className="mock-outer">
		    <div className="mock-inner">
                <div className="fb-group-picrow">  
                    <img src={userInfo.img} />
                    <div className="fb-group-text-top">  
                        <div className="fb-group-text"> 
                            <h5 className="fbh5">{userInfo.username}</h5>
                            <span className="fb-group-date">Right Now</span>
                        </div>
                    </div>
                </div>   
		        <div className="usertext">
                    <p>{header}</p>
                </div>
		        <div className="mock-img-all">
		            <div className="mock-img"></div>
		                <div className="mock-title">
		                    <div className="mock-title2">
		                        <div className="mock-title-top">
		                            Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title
		                        </div>
		                        <div className="mock-title-mid">
		                            Description: {content}
                                </div>
		                    </div>
		                </div>
		            </div>
                     <p>♡ {likes}</p>
		        </div>
            </div>

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
    
`
