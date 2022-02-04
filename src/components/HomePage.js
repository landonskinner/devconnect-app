import PostContainer from "./PostContainer";
import NavBar from "./NavBar"


function HomePage({search, loginId}){

  return(
    <div className="home-container">
      
      <div className="home-title">
        <h2 className="page-title">Dev<em>Connect</em></h2>
      </div>
      <div className="home-nav">
        <NavBar/>
      </div>
      <div className="home-posts">
        <PostContainer search={search} page="home" loginId={loginId}/>
      </div>
    </div>
  )
}

export default HomePage
