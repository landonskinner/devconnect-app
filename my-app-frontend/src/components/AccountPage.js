import {useState, useEffect} from 'react'
import PostContainer from "./PostContainer"
import styled from "styled-components"
import githublogo from "../images/github-logo.png"
import linkedinlogo from "../images/linkedin-logo.png"

function AccountPage({name}) {

    const [userData, setUserData] = useState('')

    const id = 1
    // ^^ will be set dynamically when user is logged in 

    useEffect(() => {
        fetch(`http://localhost:4000/users/${id}`)
        .then(resp => resp.json())
        .then(data => setUserData(data))
    }, [])


    return (
        <div>
        <AccountHeader>
        <div className="head">
            <img className="profile-photo" src={userData.img} />
            <div className="names">
                <h1 id="name">{userData.name}</h1>
                <h2 id="username">@{userData.username}</h2>
                <a href=""><img src={githublogo} alt="Github Link" style={{width: "30px", height: "30px"}}/></a>
            <a href=""><img src={linkedinlogo} alt="LinkedIn Link" style={{width: "30px", height: "30px"}}/></a>
                </div>
            </div>
            <div>
                <div className="bio">{userData.bio}</div>
                <div className="follows">
                <div>Followers: 25</div>
                <div>Following: 32</div>
                </div>
            </div>
        
            <div className="post-container">
                <h3>Your Posts:</h3>
                <PostContainer name={name} />
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
    }


    .follows {
        position: relative;
        left: 70%; 
        width: 25%;
        margin: 20px;
        bottom: 58px;
        border: 1px solid black;
        border-radius: 15px;
    }

    .post-container {
        position: relative;
        bottom: 55px;
    }

    .post-container h3 {
        font-size: 24px;
    }



`