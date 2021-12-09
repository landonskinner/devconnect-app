import React, { useState, useEffect } from 'react';
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import styled from "styled-components";
import githublogo from "../images/github-logo.png"
import linkedinlogo from "../images/linkedin-logo.png"
import FavoritesContainer from './FavoritesContainer';

function FavoritesPage({ search }) {
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
                <h1 id="name1">{userData.name}</h1>
                <h2 id="username1">@{userData.username}</h2>
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
            <div id="nav">
                <NavBar />
            </div>
            <div className="post-container">
              
                <h3>Your Favorites:</h3>
                <FavoritesContainer search={search} />
            </div>
        </AccountHeader>

        </div>
    );
  }
  
  export default FavoritesPage;



  const AccountHeader = styled.div`
  .profile-photo {
      border-radius: 150px;
      border: 1px solid black;
      margin: 5px;
      width: 150px;
      height: 150px;
      box-shadow: 4px 4px lightgrey;
  }


  #name1 {

      font-size: 40px;
      margin: 5px;
      text-shadow: 3px 3px lightgrey;
}

  #username1 {

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
      bottom: 175px;
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
      bottom: 115px;
      left: 3%;
      width: 25%;
      z-index: 1;
  }
`