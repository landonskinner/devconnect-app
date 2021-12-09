import PostContainer from "./PostContainer";
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


function HomePage({search, loginId}){

  const [userData, setUserData] = useState(" ")

  useEffect(() => {
    fetch(`http://localhost:9292/users/${loginId}`)
    .then(res => res.json())
    .then(data => setUserData(data)
  )}, [loginId])

  return(
    <div className="home-container">
      
      <div className="home-title">
        <h2 className="page-title">Dev<em>Connect</em></h2>
      </div>
      <div>

        <img className="prof-photo-home" src={userData[0].image_url} />
        <Link to="/account" className="account-link">My Account</Link>
      </div>
      <div className="home-posts">
        <PostContainer search={search} page="home" loginId={loginId}/>
      </div>
    </div>
  )
}

export default HomePage