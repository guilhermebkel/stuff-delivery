import React from "react"
import { Switch, /*Route, */Redirect } from "react-router-dom"

const Routes = () => (
	<Switch>
		<Redirect from="/" to="/dashboard" />
	</Switch>
)

export default Routes
