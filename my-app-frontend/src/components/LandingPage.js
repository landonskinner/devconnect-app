import {Link} from 'react-router-dom'

function LandingPage(){
  // const history = useHistory()
  // const handleClick = () => history.push('/home')
  
  const handleSubmit = (e) => e.preventDefault()

  return (
    <>
      <h2 className="page-title">Dev<em>Connect</em></h2>
      <div className="form-container">
        <form className="signin-register" onSubmit={handleSubmit}>
          <h3 className="signin-title">Sign In</h3>
          <div className="form-input">
            <label for="email">Email:</label><br/>
            <input type="email" className="login-details" placeholder="Enter email" />
          </div>
          <div className="form-input">
            <label for="password">Password:</label><br/>
            <input type="password" className="login-details" placeholder="Enter password" />
          </div>
          <Link to="/home">
            <button type="submit" className="submit">Sign in</button><br/>
          </Link>
          <p className="link-text">  
            Need an account ? <Link class="reg-link" to="/register">sign up</Link>
          </p>
        </form>
      </div>
    </>
  )
}

export default LandingPage


