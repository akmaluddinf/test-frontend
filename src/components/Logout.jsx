import React from 'react'
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'

function Logout () {
  const history = useHistory()

  const handleClickLogout = () => {
    Cookies.remove('token')
    history.push('/login')
  }

  return (
    <button className="btn btn-danger" type="button" onClick={handleClickLogout}>Logout</button>
  )
}

export default Logout
