import PostContainer from "./PostContainer";
import {useState, useEffect} from 'react'
import NavBar from "./NavBar"


function HomePage({search, loginId}){

  const [userData, setUserData] = useState(" ")

  useEffect(() => {
    fetch(`http://localhost:9292/users/${loginId}`)
    .then(res => res.json())
    .then(data => {
      setUserData(data)
      // window.location.reload(false)
    }
  )}, [loginId])

  return(
    <div className="home-container">
      
      <div className="home-title">
        <h2 className="page-title">Dev<em>Connect</em></h2>
      </div>
      <div className="home-nav">
        <NavBar/>
      </div>
      <div>
        <img className="prof-photo-home" src={userData[0].image_url} />
      </div>
      <div className="home-posts">
        <PostContainer search={search} page="home" loginId={loginId}/>
      </div>
    </div>
  )
}

export default HomePage
