import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/login">Login</Link>
      <Link className="nav-link" to="/register">Register</Link>
      <Link className="nav-link" to="/checklist">Checklist</Link>
      <Link className="nav-link" to="/item">Checklist Item</Link>
    </nav>
  )
}

export default Navigation
