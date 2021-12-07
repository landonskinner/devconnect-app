function RegistrationPage(){
  return(
    <div className="registration-container">
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
        <button type="submit" className="submit">Register</button>
        <p className="registered-text">
          Already registered <a href="#">log in?</a>
        </p>
      </form>
    </div>
  )
}

export default RegistrationPage