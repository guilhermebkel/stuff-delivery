import React, { useState } from "react"
import { Typography, Grid } from "@material-ui/core"

import { Divider } from "@delivy/components"

import PackageList from "@delivy/pages/Dashboard/Overview/PackageList"
import NewPackageBanner from "@delivy/pages/Dashboard/Overview/NewPackageBanner"

const Overview = () => {
	const [loading, setLoading] = useState(true)

	setTimeout(() => setLoading(false), 500)

	return (
		<Grid>
			<NewPackageBanner />

			<Divider size={2} />

			<Typography variant="h6">
				Your packages
			</Typography>

			<Divider size={2} />

			<PackageList
				loading={loading}
				packages={[
					{
						id: 1,
						last_place: "Fundão, Espírito Santo",
						last_place_consolidated: "Your house",
						last_update: "30 Mar 2020",
						status: "Delivered",
						tracking_code: "SS123456789BR"
					},
					{
						id: 2,
						last_place: "Belo Horizonte, MG",
						last_place_consolidated: "Courier",
						last_update: "02 April 2020",
						status: "New",
						tracking_code: "SS123456789BR"
					},
					{
						id: 3,
						last_place: "No track",
						last_place_consolidated: "Finding",
						last_update: "No update",
						status: "Waiting",
						tracking_code: "SS123456789BR"
					},
					{
						id: 4,
						last_place: "Vitória, Espírito Santo",
						last_place_consolidated: "Lost",
						last_update: "20 Jan 2020",
						status: "Lost",
						tracking_code: "SS123456789BR"
					}
				]}
			/>
		</Grid>
	)
}

export default Overview
