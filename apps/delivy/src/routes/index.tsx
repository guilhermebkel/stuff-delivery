import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import Dashboard from "@delivy/pages/Dashboard"

const Routes = () => (
	<Switch>
		<Route path="/dashboard" component={Dashboard} />
		<Redirect from="/" to="/dashboard" />
	</Switch>
)

export default Routes
