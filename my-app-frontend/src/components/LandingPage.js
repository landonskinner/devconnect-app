import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
// import {FaUserNinja} from 'react-icons/fa'
// import {VscError} from 'react-icons/vsc'

function LandingPage({handleLogin}){
  const history = useHistory()
  // const [userInfo, setUserInfo] = useState("")
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  })
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:9292/users`)
    .then(res => res.json())
    .then(data => {
        const login = data.filter(user => (user.username === loginData.username) && (user.password === loginData.password))
        if (!!login[0] === true) {
          handleLogin(login)
          history.push('/home')
        } else {
          console.log('failure')
        }
    })
  }

  const handleChange = (e) => {
    setLoginData({
        ...loginData,
        [e.target.id]: e.target.value
    })
}
 

  return (
    <div className="page-container">
     <div className="form-container">
      <header className="signin-title">dev<strong><em>Connect</em></strong></header>
        <form className="signin-register" onSubmit={handleSubmit}>
          <div className="field username">
            <div className="input-area">
              <input type="text" id="username" className="login-details" value={loginData.username} placeholder="Username" onChange={(e) => handleChange(e)}/>
            </div>
          </div>
          <div className="field password">
            <div className="input-area">
              <input type="password" id="password" className="login-details" value={loginData.password} placeholder="Password" onChange={(e) => handleChange(e)}/>
            </div>
          </div>
          <input type="submit" className="submit" value="Sign in"/>
        </form>
        <div className="link-text"> Need an account ? <Link className="reg-link" to="/register">Sign up now</Link></div>
      </div>
    </div>
  )
}

export default LandingPage

