import React, { useState } from "react"

import { Loading } from "../../components"

const Dashboard = () => {
	const [loading, setLoading] = useState(true)

	setTimeout(() => setLoading(false), 3000)

	return (
		<Loading loading={loading}>
			<h1>Dashboard</h1>
		</Loading>
	)
}

export default Dashboard
