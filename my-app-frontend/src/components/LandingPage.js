function LandingPage(){
  return (
    <div className="login-container">
    <form>
      <h3>Sign In</h3>
      <div className="login-input">
        <label for="email">Email:</label><br/>
        <input type="email" className="login-details" placeholder="Enter email" />
      </div>
      <div className="login-input">
        <label for="password">Password</label><br/>
        <input type="password" className="login-details" placeholder="Enter password" />
      </div>
      <button type="submit" className="submit">Sign in</button>
    </form>
  </div>
  )
}

export default LandingPage

