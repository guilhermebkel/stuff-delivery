import React from "react"
import { Switch, Route } from "react-router-dom"

import Overview from "../pages/Dashboard/Overview"

const Routes = () => (
	<Switch>
		<Route path="/dashboard/overview" component={Overview} />
	</Switch>
)

export default Routes
