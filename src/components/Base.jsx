import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from './navigation'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Checklist from '../pages/Checklist'
import ChecklistCreate from '../pages/ChecklistCreate'
import ChecklistItemCreate from '../pages/ChecklistItemCreate'
import Logout from '../components/Logout'

function Base() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/">
          Home
          <br />
          <Logout />
        </Route>
        <Route path="/login">
          Form Login
          <Login />
        </Route>
        <Route path="/register">
          Form Register
          <Register />
        </Route>
        <Route exact path="/checklist">
          <Checklist />
        </Route>
        <Route path="/checklist/create">
          Checklist Create
          <ChecklistCreate />
        </Route>
        <Route exact path="/item">
          Create Checklist Item
          <ChecklistItemCreate />
        </Route>
        <Route path="/item/:id">
          Checklist Item by id
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Base
