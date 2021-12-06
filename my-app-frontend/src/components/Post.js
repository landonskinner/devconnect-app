import {useEffect, useState} from 'react'
import '../Post.css'

function Post({post:{id, header, description, img, content, likes, user_id}}) {
    
    const [username, setUsername] = useState("")

    useEffect(() => {
        fetch(`http://localhost:4000/users/${id}`)
        .then(resp => resp.json())
        .then(data => setUsername(data.username))
    }, []) 
    
    return (
        // <div class="mock-outer">
        //     <h2 class="fbh5">{header}</h2>
        //     <h3>{description}</h3>
        //     <img src={img}/>
        //     <p>By: {username}</p>
        //     <p>{content}</p>
        //     <p>Likes: {likes}</p>
        //     <p>Comments:</p>
        // </div>

        <div class="mock-outer">
		<div class="mock-inner">
        <div class="fb-group-picrow">  
            <img src={img} />
                <div class="fb-group-text-top">  <div class="fb-group-text"> 
                    <h5 class="fbh5">{username}</h5>
                    <span class="fb-group-date">Right Now</span>
                    </div>
                    </div>
            </div>   
		<div class="usertext"><p>{header}</p></div>
		<div class="mock-img-all">
		
		<div class="mock-img"></div>
		<div class="mock-title">
		<div class="mock-title2">
		<div class="mock-title-top">
		Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title
		</div>
		<div class="mock-title-mid">
		Description:{content}</div>
		</div>
		</div>
		</div>
        <p>Likes:{likes}</p>
		</div>
        </div>
    )
}

export default Post;
