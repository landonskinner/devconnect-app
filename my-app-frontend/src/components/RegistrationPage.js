import {Link} from 'react-router-dom'

function RegistrationPage(){

  const handleSubmit = (e) => e.preventDefault()

  return(
    <>
      <h2 className="page-title">Dev<em>Connect</em></h2>
      <div className="form-container">
        <form className="signin-register" onSubmit={handleSubmit}>
          <h3 className="signup-title">Sign up</h3>
          <div className="form-input">
            <label for="name">Name:</label><br/>
            <input type="text" className="registration-details" placeholder="Name" />
          </div>
          <div className="form-input">
            <label for="user name">User name:</label><br/>
            <input type="text" className="registration-details" placeholder="User name" />
          </div>
          <div className="form-input">
            <label for="email">Email:</label><br/>
            <input type="email" className="registration-details" placeholder="Enter email" />
          </div>
          <div className="form-input">
            <label for="password">Password:</label><br/>
            <input type="password" className="registration-details" placeholder="Enter password" />
          </div>
          <Link to="/home">
            <button type="submit" className="submit">Register</button>
          </Link>
          <p className="link-text">
            Already registered ? <Link class="reg-link" to="/">sign in</Link>
          </p>
        </form>
      </div>
    </>
  )
}

export default RegistrationPage