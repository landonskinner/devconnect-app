import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

function NewPostForm({id}) {

    const [postData, setPostData] = useState({
        header: "",
        description: "",
        image_url: "",
        content_link: "",
        like_count: 0,
        user_id: id
    })

    const [isSelected, setIsSelected] = useState(false)

    const handleNewPostClick = () => {
        setIsSelected(true)
    }

    const handlePost = (e) => {
        e.preventDefault()
        console.log(postData)
        
        fetch('http://localhost:9292/posts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(postData[0]),
        })
        .then(resp => resp.json())
        .then(data => console.log(data))

        setIsSelected(false)

        
    }

    const handleChange = (e) => {
        setPostData({
            ...postData,
            [e.target.id]: e.target.value,
        })
    }

    return (
        <div>
        {isSelected ? 
            <FormStyle>
            <form className="post-form" onSubmit={handlePost}>
            <h2>Make a New Post!</h2>
            <label>
                Post Header:
                <input
                type="text"
                id="header"
                placeholder="Give us the gist!"
                value={postData.header}
                onChange={(e) => handleChange(e)}
                />
            </label>
            <label>
                Post Description:
                <textarea
                id="description"
                placeholder="Tell the dev community what's so important about your post!"
                value={postData.desciption}
                onChange={(e) => handleChange(e)}
                />
            </label>
            <label>
                Post Image:
                <input
                type="file"
                id="image_url"
                accept="image/png, image/jpeg"
                placeholder="Give an image link"
                value={postData.image_url}
                onChange={(e) => handleChange(e)}
                />
            </label>
            <label>
                Post Media Link:
                <input
                type="text"
                id="content_link"
                placeholder="Link us to your resource!"
                value={postData.content_link}
                onChange={(e) => handleChange(e)}
                />
            </label>
            <button type="submit">Share!</button>
            </form>
        </FormStyle>
        :
        <ButtonStyle>
            <button onClick={handleNewPostClick}>Make a New Post!</button>
        </ButtonStyle>
        
        }
        </div>
    )
}

export default NewPostForm

const FormStyle = styled.div`

display: flex;
justify-content: center;

    h2 {
        font-size: 24px;
        margin: 2px;
    }


    form {
        width: 40%;
        margin: 10px;
        padding: 10px;
        border-radius: 15px;
        background-color: black;
        color: white;
        font-weight: bold;
        box-shadow: 7px 7px grey;
    }


    label {
        font-size: 16px;
        justify-content: left;
    }

    textarea {
        resize: none;
        display: block;
        margin: auto;
        width: 90%;
        height: 120px;
        font-family: arial;
        border-radius: 5px;
    }

    input {
        display: block;
        margin: auto;
        width: 90%;
        font-family: arial;
        border-radius: 5px;
    }

    #img {
        text-align-last: center;
        margin: auto;
        padding: 5px;
        font-weight: bold;
    }

    button {
        background-color: white;
        border: none;
        color: black;
        font-weight: bold;
        padding: 8px 16px;
        border-radius: 10px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
      }

`

const ButtonStyle = styled.div`
    
button {
    background-color: black;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 16px;
    padding: 12px 24px;
    border-radius: 10px;
    text-decoration: none;
    margin: 9px 6px;
    cursor: pointer;
    box-shadow: 5px 5px grey;
}


`