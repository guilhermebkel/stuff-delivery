import React from "react"
import { Switch, Route } from "react-router-dom"

const Routes = () => (
	<Switch>
		<Route path="/dashboard/overview" component={() => <h1>Overview</h1>} />
		<Route path="/dashboard/history" component={() => <h1>History</h1>} />
	</Switch>
)

export default Routes
