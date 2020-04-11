import React from "react"
import { Typography, Grid } from "@material-ui/core"

import { Divider } from "../../../components"

const Overview = () => {
	return (
		<Grid>
			<Typography variant="h6">
				Your packages
			</Typography>

			<Divider size={2} />
		</Grid>
	)
}

export default Overview
