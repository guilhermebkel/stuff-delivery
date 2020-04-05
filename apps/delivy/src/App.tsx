import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Login from "./pages/Login"
import Signup from "./pages/Signup"

import Routes from "./routes"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Routes />
      </Switch>
    </BrowserRouter>
  )
}

export default App
