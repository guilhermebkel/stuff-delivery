import React, { useState } from "react"
import { Typography, Grid } from "@material-ui/core"

import { Divider } from "../../../components"

import PackageList from "./PackageList"

const Overview = () => {
	const [loading, setLoading] = useState(true)

	setTimeout(() => setLoading(false), 2500)

	return (
		<Grid>
			<Typography variant="h6">
				Your packages
			</Typography>

			<Divider size={2} />

			<PackageList
				loading={loading}
				packages={[]}
			/>
		</Grid>
	)
}

export default Overview
