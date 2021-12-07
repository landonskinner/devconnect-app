import styled from "styled-components"

function LandingPage(){
  return (
    <LandingContainer>
      <form>
        <h3>Log in</h3>
        <div className="login-input">
          <label for="email">Email</label>
          <input type="email" className="login-details" placeholder="Enter email" />
      </div>
      <div className="login-input">
          <label for="password">Password</label>
          <input type="password" className="login-details" placeholder="Enter password" />
      </div>
      <div className="login-input">
          <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
          </div>
      </div>
      <button type="submit" className="submit-btn">Sign in</button>
    </form>
  </LandingContainer>
  )
}

export default LandingPage

const LandingContainer = styled.div`


`

