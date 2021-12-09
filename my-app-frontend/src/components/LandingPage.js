import {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

function LandingPage({handleLogin}){
  const history = useHistory()
  // const handleClick = () => history.push('/home')
  const [userInfo, setUserInfo] = useState("")
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  })
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
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
    <>
      <h2 className="page-title">Dev<em>Connect</em></h2>
      <div className="form-container">
        <form className="signin-register" onSubmit={handleSubmit}>
          <h3 className="signin-title">Sign In</h3>
          <div className="form-input">
            <label htmlFor="username" required>Username:</label><br/>
            <input type="text" id="username" className="login-details" value={loginData.username} placeholder="Enter username" onChange={(e) => handleChange(e)}/>
          </div>
          <div className="form-input">
            <label htmlFor="password" required>Password:</label><br/>
            <input type="password" id="password" className="login-details" value={loginData.password} placeholder="Enter password" onChange={(e) => handleChange(e)}/>
          </div>
            <button type="submit" className="submit">Sign in</button><br/>
          <p className="link-text">  
            Need an account ? <Link className="reg-link" to="/register">sign up</Link>
          </p>
        </form>
      </div>
    </>
  )
}

export default LandingPage


