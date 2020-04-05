import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import Dashboard from "../pages/Dashboard"

const Routes = () => (
	<Switch>
		<Route exact path="/dashboard" component={Dashboard} />
		<Redirect from="/" to="/dashboard" />
	</Switch>
)

export default Routes
