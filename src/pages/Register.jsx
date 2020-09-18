import React, { useState } from 'react'
import { register } from '../services/api'

function Register() {

  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')
  const[email, setEmail] = useState('')

  const registerUser = () => {
    register.post({ username, password, email })
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return(
    <div className="card m-3">
      <div className="card-body">
      <form>
      <div className="form-group">
      <label>Username: </label>
      <input className="form-control" name="username" type="text" onChange={handleUsernameChange} />
      <label>Email: </label>
      <input className="form-control" name="email" type="text" onChange={handleEmailChange} />
      <label>Password: </label>
      <input className="form-control" name="password" type="password" onChange={handlePasswordChange} />
      </div>
        <button className="btn btn-primary" type="button" onClick={registerUser}>Register</button>
      </form>
      </div>
    </div>
  )
}

export default Register
