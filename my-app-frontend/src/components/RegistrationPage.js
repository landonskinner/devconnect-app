import styled from 'styled-components'

function RegistrationPage(){
  return(
    <RegistrationContainer>
      <form>
        <h3>Register</h3>
        <div className="registration-input">
          <label for="name">Name</label>
          <input type="text" className="registration-details" placeholder="Name" />
        </div>
        <div className="registration-input">
          <label for="user name">User name</label>
          <input type="text" className="registration-details" placeholder="User name" />
        </div>
        <div className="registration-input">
          <label for="email">Email</label>
          <input type="email" className="registration-details" placeholder="Enter email" />
        </div>
        <div className="registration-input">
          <label for="password">Password</label>
          <input type="password" className="registration-details" placeholder="Enter password" />
        </div>
        <button type="submit" className="submit-btn">Register</button>
        <p className="registered-text">
          Already registered <a href="#">log in?</a>
        </p>
      </form>
    </RegistrationContainer>
  )
}

export default RegistrationPage