import React, { useState, useEffect } from "react"
import { Typography, Grid,  } from "@material-ui/core"

import { Divider } from "@delivy/components"

import PackageList from "@delivy/pages/Dashboard/Overview/PackageList"
import NewPackageBanner from "@delivy/pages/Dashboard/Overview/NewPackageBanner"
import NewSubscriptionModal from "@delivy/pages/Dashboard/Overview/NewSubscriptionModal"

// import ApiService from "@delivy/services/Api"

import useValidation from "@delivy/hooks/useValidation"

type PackageStatus = "Delivered" | "New" | "Lost" | "Waiting"

export interface Package {
	id: number
	last_place_consolidated: string
	last_place: string
	tracking_code: string
	last_update: Date | string
	status: PackageStatus
}

const Overview = () => {
	const [loading, setLoading] = useState(true)
	const [newSubscriptionModalVisibility, setNewSubscriptionModalVisibility] = useState(false)
	const [packages, setPackages] = useState<Package[]>([])

	const { triggerValidation } = useValidation()

	const getPackages = async () => {
		try {
			// await ApiService("hermes").get("/track")

			await new Promise(resolve => setTimeout(resolve, 500))

			setPackages([
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
			])

			setLoading(false)
		} catch(error) {
			triggerValidation(error)
		}
	}

	useEffect(() => {
		getPackages()
	}, [])

	return (
		<Grid>
			<NewSubscriptionModal
				onClose={() => setNewSubscriptionModalVisibility(false)}
				visible={newSubscriptionModalVisibility}
			/>
			
			<NewPackageBanner
				onSubmit={() => setNewSubscriptionModalVisibility(true)}
			/>

			<Divider size={2} />

			<Typography variant="h6">
				Your packages
			</Typography>

			<Divider size={2} />

			<PackageList
				loading={loading}
				packages={packages}
			/>
		</Grid>
	)
}

export default Overview
