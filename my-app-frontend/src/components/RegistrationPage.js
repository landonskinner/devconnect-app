import {Link} from 'react-router-dom'
import {useState} from 'react'

function RegistrationPage({handleLogin}){

  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:9292/users`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUser)
    })
    .then(resp => resp.json())
    .then(data => handleLogin([data]))
  }

  const handleChange = (e) => {
    setNewUser({
        ...newUser,
        [e.target.id]: e.target.value
    })
}

  return(
    <>
      <h2 className="page-title">Dev<em>Connect</em></h2>
      <div className="form-container">
        <form className="signin-register" onSubmit={handleSubmit}>
          <h3 className="signup-title">Sign up</h3>
          <div className="form-input">
            <label className="form-label" htmlFor="name">Name:</label><br/>
            <input type="text" id="name" className="registration-details" value={newUser.name} onChange={(e) => handleChange(e)} placeholder="Name" />
          </div>
          <div className="form-input">
            <label className="form-label" htmlFor="user name">User name:</label><br/>
            <input type="text" id="username" className="registration-details" value={newUser.username} onChange={(e) => handleChange(e)} placeholder="User name" />
          </div>
          <div className="form-input">
            <label className="form-label" htmlFor="email">Email:</label><br/>
            <input type="email" id="email" className="registration-details" value={newUser.email} onChange={(e) => handleChange(e)} placeholder="Enter email" />
          </div>
          <div className="form-input">
            <label className="form-label" htmlFor="password">Password:</label><br/>
            <input type="password" id="password" className="registration-details" value={newUser.password} onChange={(e) => handleChange(e)} placeholder="Enter password" />
          </div>
          {/* <Link to="/home"> */}
            <button type="submit" className="submit">Register</button>
          {/* </Link> */}
          <p className="link-text">
            Already registered ? <Link class="reg-link" to="/">sign in</Link>
          </p>
        </form>
      </div>
    </>
  )
}

export default RegistrationPage