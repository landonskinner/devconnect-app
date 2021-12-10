import {Link, useHistory} from 'react-router-dom'
import {useState} from 'react'


function RegistrationPage({handleLogin}){

  const history = useHistory()

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
    .then(data => {
      handleLogin([data])
      history.push("/home")
    })
  }

  const handleChange = (e) => {
    setNewUser({
        ...newUser,
        [e.target.id]: e.target.value
    })
}

  return(
    <div className="page-container">
     <div className="form-container">
     <header className="signin-title">dev<strong><em>Connect</em></strong></header>
        <form className="signin-register" onSubmit={handleSubmit}>
          <div className="field name">
              <div className="input-area">
                <input type="text" id="name" value={newUser.name} onChange={(e) => handleChange(e)} placeholder="Name" />
              </div>
            </div>
            <div className="field username">
              <div className="input-area">
                <input type="text" id="username" value={newUser.username} onChange={(e) => handleChange(e)} placeholder="Username" />
              </div>
            </div>
            <div className="field email">
              <div className="input-area">
                <input type="email" id="email" value={newUser.email} onChange={(e) => handleChange(e)} placeholder="Enter email" />
              </div>
            </div>
            <div className="field password">
              <div className="input-area">
                <input type="password" id="password" value={newUser.password} onChange={(e) => handleChange(e)} placeholder="Enter password" />
              </div>
          </div>
        <input type="submit" className="submit" value="Sign up"/> 
       </form>
       <div className="link-text"> Already registered ? <Link class="reg-link" to="/">Sign in</Link> </div>
      </div>
    </div>
  )
}

export default RegistrationPage