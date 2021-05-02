import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../views/Home'
import Task from '../views/Task'
export default function index() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/task" component={Task} exact />
      </Switch>
    </BrowserRouter>
  )
}
