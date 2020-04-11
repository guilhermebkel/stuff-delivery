import React from "react"
import { Skeleton } from "@material-ui/lab"
import { Grid, Fade } from "@material-ui/core"

import { Divider } from "../../../../components"

interface Package {
	id: number
	last_place_consolidated: string
	last_place: string
	tracking_code: string
	last_update: Date
	status: string
}

interface PackageListProps {
	packages: Array<Package>
	loading: boolean
}

interface PackageListSkeletonProps {
	size: number
}

const PackageListSkeleton = (props: PackageListSkeletonProps) => {
	const { size } = props

	const skeletons = []

	for (let i=0; i<size; i++) {
		skeletons.push(
			<Grid container spacing={2}>
				<Grid item>
					<Skeleton variant="rect" width={60} height={60} style={{ borderRadius: 5 }} />
				</Grid>
				<Grid item style={{ flex: 1 }}>
					<Skeleton variant="text" height={20} />

					<Skeleton variant="text" height={20} />

					<Skeleton variant="text" height={20} />
				</Grid>
			</Grid>
		)

		skeletons.push(<Divider size={1} />)
	}

	return <>{skeletons}</>
}

const PackageList = (props: PackageListProps) => {
	const { loading, packages } = props

	if (loading) {
		return (
			<Fade in={loading}>
				<PackageListSkeleton size={5} />
			</Fade>
		)
	} else {
		return (
			<Fade in={!loading}>
				<h1>PackageList</h1>
			</Fade>
		)
	}
}

export default PackageList
