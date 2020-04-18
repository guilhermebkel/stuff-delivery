import React, { useState, useEffect } from "react"
import { Typography, Grid,  } from "@material-ui/core"

import { Divider } from "@delivy/components"

import PackageList from "@delivy/pages/Dashboard/Overview/PackageList"
import NewPackageBanner from "@delivy/pages/Dashboard/Overview/NewPackageBanner"
import NewSubscriptionModal from "@delivy/pages/Dashboard/Overview/NewSubscriptionModal"

import ApiService from "@delivy/services/Api"

import useValidation from "@delivy/hooks/useValidation"

type PackageStatus = "Delivered" | "New" | "Lost" | "Waiting"

export interface Package {
	id: number
	name: string
	last_place_consolidated: string
	last_place: string
	tracking_code: string
	last_update?: Date
	status: PackageStatus
}

export interface EditPackageData {
	id: number
	name: string
	tracking_code: string
}

const Overview = () => {
	const [loading, setLoading] = useState(true)
	const [newSubscriptionModalVisibility, setNewSubscriptionModalVisibility] = useState(false)
	const [packages, setPackages] = useState<Package[]>([])

	const { triggerValidation } = useValidation()

	const getPackages = async () => {
		try {
			const response = await ApiService("hermes").get("/track")

			const { tracks } = response.data

			setPackages(tracks)

			setLoading(false)
		} catch(error) {

			const statusCode = +error?.response?.status

			if (statusCode === 404) {
				setPackages([])
				setLoading(false)
			} else {
				triggerValidation(error)
			}
		}
	}

	const handleEditPackage = async (data: EditPackageData) => {
		console.log(data)
	}

	const handleDeletePackage = async (deliveryPackageId: number) => {
		console.log(deliveryPackageId)
	}

	useEffect(() => {
		getPackages()
	}, [])

	return (
		<Grid>
			<NewSubscriptionModal
				onClose={() => setNewSubscriptionModalVisibility(false)}
				onSubmit={getPackages}
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
				onDelete={handleDeletePackage}
				onEdit={handleEditPackage}
			/>
		</Grid>
	)
}

export default Overview
