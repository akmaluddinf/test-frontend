import React, { useState } from 'react'
import { login } from '../services/api'
import Cookies from 'js-cookie'

function Login() {

  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')

  const registerUser = async () => {
    const response = await login.post({ username, password })
    console.log(response.data)
    if(response.status === 200){
      console.log('success')
      const { token } = response.data.data
      Cookies.set('token', token)
    }
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
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
            <label>Password: </label>
            <input className="form-control" name="password" type="text" onChange={handlePasswordChange} />
          </div>
          <button className="btn btn-primary" type="button" onClick={registerUser}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
