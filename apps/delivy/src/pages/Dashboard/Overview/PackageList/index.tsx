import React from "react"
import { Skeleton } from "@material-ui/lab"
import { Grid, Fade, Avatar, Typography, useTheme, MenuList, MenuItem, Grow } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHourglass, faTimesCircle } from "@fortawesome/free-regular-svg-icons"
import { faIgloo, faTruckLoading } from "@fortawesome/free-solid-svg-icons"

import { Divider } from "@delivy/components"

type PackageStatus = "Delivered" | "New" | "Lost" | "Waiting"

interface Package {
	id: number
	last_place_consolidated: string
	last_place: string
	tracking_code: string
	last_update: Date | string
	status: PackageStatus
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
					<Skeleton animation="wave" variant="rect" width={60} height={60} style={{ borderRadius: 5 }} />
				</Grid>
				<Grid item style={{ flex: 1, maxWidth: "80%" }}>
					<Skeleton animation="wave" variant="text" height={20} />

					<Skeleton animation="wave" variant="text" height={20} />

					<Skeleton animation="wave" variant="text" height={20} />
				</Grid>
			</Grid>
		)

		skeletons.push(<Divider size={1} />)
	}

	return <>{skeletons}</>
}

const PackageList = (props: PackageListProps) => {
	const { loading, packages } = props

	const theme = useTheme()

	if (loading) {
		return (
			<Fade in={loading}>
				<PackageListSkeleton size={5} />
			</Fade>
		)
	} else {
		return (
			<Fade in={!loading}>
				<>
					{packages.map((deliveryPackage, index) => {

					const extraData = {
						Delivered: {
							color: theme.palette.success.main,
							icon: faIgloo
						},
						New: {
							color: theme.palette.secondary.main,
							icon: faTruckLoading
						},
						Waiting: {
							color: theme.palette.info.main,
							icon: faHourglass
						},
						Lost: {
							color: theme.palette.error.main,
							icon: faTimesCircle
						}
					}

					return (
						<Grow in={!loading} style={{ transformOrigin: 0 }} timeout={(300 * (+index + 1))}>
							<MenuList>
								<MenuItem disableGutters>
									<Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
										<Avatar variant="rounded" style={{ width: 60, height: 60, backgroundColor: extraData[deliveryPackage.status]?.color }}>
											<FontAwesomeIcon icon={extraData[deliveryPackage.status]?.icon} />
										</Avatar>
									</Grid>

									<Grid container alignItems="center" item xs={2} sm={2} md={2} lg={2} xl={2}>
										<Typography style={{ fontWeight: "bold" }}>
											{deliveryPackage.last_place_consolidated}
										</Typography>
									</Grid>
							
									<Grid container alignItems="center" item xs={2} sm={2} md={2} lg={2} xl={2}>
										<Typography>
											{deliveryPackage.last_place}
										</Typography>
									</Grid>
							
									<Grid container alignItems="center" item xs={2} sm={2} md={2} lg={2} xl={2}>
										<Typography>
											{deliveryPackage.tracking_code}
										</Typography>
									</Grid>
								
									<Grid container alignItems="center" item xs={2} sm={2} md={2} lg={2} xl={2}>
										<Typography>
											{deliveryPackage.last_update}
										</Typography>
									</Grid>

									<Grid container alignItems="center" item xs={2} sm={2} md={2} lg={2} xl={2}>
										<Avatar
											variant="circle"
											style={{
												width: 7,
												height: 7,
												backgroundColor: extraData[deliveryPackage.status]?.color,
												marginRight: 10,
												boxShadow: `0 0 7px ${extraData[deliveryPackage.status]?.color}`
											}}
										>
											<div />
										</Avatar>
										<Typography>
											{deliveryPackage.status}
										</Typography>
									</Grid>
								</MenuItem>
							</MenuList>
						</Grow>
					)})}
				</>
			</Fade>
		)
	}
}

export default PackageList
