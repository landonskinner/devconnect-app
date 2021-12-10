import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

function EditProfileForm(loginId, setLoginId) {

    const [editData, setEditData] = useState({
        name: "",
        username: "",
        github: "",
        linkedin: "",
        bio: "",
        image_url: ""
    })

    useEffect(() => {
        fetch(`http://localhost:9292/users/${loginId.loginId}`)
        .then(resp => resp.json())
        .then(data => setEditData(data[0]))
    }, [loginId])
    
    const [isSelected, setIsSelected] = useState(false)

    const handleNewEditClick = () => {
        setIsSelected(true)
    }

    const handleEdit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9292/users/${loginId.loginId}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(editData),
        })
        .then(resp => resp.json())
        .then(data => console.log(data))

        setIsSelected(false)
        setEditData({
            name: "",
            username: "",
            github: "",
            linkedin: "",
            bio: "",
            image_url: ""
        })
        window.location.reload(false)
    }

    const handleChange = (e) => {
            setEditData({
                ...editData,
                [e.target.id]: e.target.value
            })
    }

    return (
        <div>
            <div>
        {isSelected ? 
            <EditFormStyle>
            <form className="edit-form" onSubmit={handleEdit}>
            <h2>Edit Your Profile!</h2>
            <label>
                Name:
                <input
                type="text"
                className="fix"
                id="name"
                placeholder="Update your name..."
                value={editData.name}
                onChange={(e) => handleChange(e)}
                />
            </label>
            <label>
                Username:
                <input
                type="text"
                id="username"
                className="fix"
                placeholder="Update your username..."
                value={editData.username}
                onChange={(e) => handleChange(e)}
                />
            </label>
            <label>
                Github Link:
                <input
                type="text"
                id="github"
                placeholder="Update your Github..."
                value={editData.github}
                onChange={(e) => handleChange(e)}
                />
            </label>
            <label>
                LinkedIn Link:
                <input
                type="text"
                id="linkedin"
                placeholder="Update your LinkedIn..."
                value={editData.linkedin}
                onChange={(e) => handleChange(e)}
                />
            </label>
            <label>
                Bio:
                <textarea
                id="bio"
                placeholder="Update your bio..."
                value={editData.bio}
                onChange={(e) => handleChange(e)}
                />
            </label>
            <label>
                Profile Photo Link:
                <input
                type="text"
                id="image_url"
                placeholder="Update your profile photo..."
                onChange={(e) => handleChange(e)}
                />
            </label>
            <button type="submit">Share!</button>
            </form>
        </EditFormStyle>
        :
        <EditButtonStyle>
            <button onClick={handleNewEditClick}>Edit Your Profile</button>
        </EditButtonStyle>
        
        }
        </div>
        </div>
    )
}

export default EditProfileForm

const EditFormStyle = styled.div`

display: flex;
justify-content: center;
padding: 30px;

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
        height: 125px;
        font-family: arial;
        border-radius: 5px;
        text-align: top;
        padding: 5px;
    }

    input, #name, #username {
        display: block;
        justify-content: center;
        margin: auto;
        margin: 0px;
        position: relative;
        left: 20px;
        width: 90%;
        font-family: arial;
        border-radius: 5px;
        font-size: 12px;
        text-shadow: none;
        height: 20px;
        background-color: white;
        padding: 5px;
    }
    
    .fix {
        display: block;
        /* margin: auto; */
        width: 90%;
        font-family: arial;
        border-radius: 5px;
        font-size: 12px;
        text-shadow: none;
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

const EditButtonStyle = styled.div`
    
button {
    background-color: black;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 16px;
    padding: 12px 24px;
    border-radius: 10px;
    text-decoration: none;
    margin: 20px 20px;
    cursor: pointer;
    box-shadow: 5px 5px grey;
}


`