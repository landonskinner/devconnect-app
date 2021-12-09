import {useState, useEffect} from 'react'
import PostContainer from "./PostContainer"
import styled from "styled-components"
import githublogo from "../images/github-logo.png"
import linkedinlogo from "../images/linkedin-logo.png"
import NavBar from './NavBar'
import NewPostForm from './NewPostForm'
import EditProfileForm from './EditProfileForm'


function AccountPage({name, search}) {

    const [userData, setUserData] = useState('')

    const id = 55
    // ^^ will be set dynamically when user is logged in 

    useEffect(() => {
        fetch(`http://localhost:9292/users/${id}`)
        .then(resp => resp.json())
        .then(data => setUserData(data))

    }, [id])
console.log(userData)



    if (!!userData === false) return <h3>Loading...</h3>

    return (
        <div>
        <AccountHeader>
            
        <div className="head">
            <img className="profile-photo" src={userData[0].image_url} />
            <div className="names">
                <h1 id="name">{userData[0].name}</h1>
                <h2 id="username">@{userData[0].username}</h2>
                <a href={userData[0].github} target="_blank"><img src={githublogo} alt="Github Link" style={{width: "30px", height: "30px"}}/></a>
                <a href={userData[0].linkedin} target="_blank"><img src={linkedinlogo} alt="LinkedIn Link" style={{width: "30px", height: "30px"}}/></a>
                </div>
            </div>
            
            <div>
                <div className="bio">{userData[0].bio}</div>
                <EditProfileForm id={id} />
            </div>
            <div id="nav">
                <NavBar />
            </div>
            
            <div className="post-container">
            <NewPostForm id={id} />
                <h3>Your Posts:</h3>
                <PostContainer id={id} page="profile" search={search}/>
            </div>
        </AccountHeader>

        </div>
    )
}

export default AccountPage

const AccountHeader = styled.div`
    .profile-photo {
        border-radius: 150px;
        border: 1px solid black;
        margin: 5px;
        width: 150px;
        height: 150px;
        box-shadow: 4px 4px lightgrey;
    }
    #name {
        font-size: 40px;
        margin: 5px;
        text-shadow: 3px 3px lightgrey;
    }
    #username {
        font-size: 28px;
        margin: 5px;
        text-shadow: 3px 3px lightgrey;
    }
    .head {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .names {
        display: block;
    }
    .bio {
        background-color: black;
        color: white;
        margin: 10px;
        padding: 10px;
        margin-left: 30%;
        margin-right: 30%;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        box-shadow: 7px 7px grey;
        font-weight: bold;
    }


    .edit {
        position: relative;
        left: 72%; 
        width: 20%;
        margin: 20px;
        bottom: 58px;
        border: 1px solid black;
        border-radius: 15px;
        padding: 8px;
        box-shadow: 7px 7px grey;
        cursor: pointer;
    }
    .post-container {
        position: relative;
        bottom: 175px;
        margin: 0;
    }
    .post-container h3 {
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        z-index: -1;
    }
    #nav {
        position: relative;
        bottom: 80px;
        left: 3%;
        width: 25%;
        z-index: 1;

      
    }



`

