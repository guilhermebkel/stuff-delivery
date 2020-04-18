import React from "react"
import { Skeleton } from "@material-ui/lab"
import { Grid, Fade, Avatar, Typography, useTheme, MenuList, MenuItem, Grow, IconButton } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHourglass, faTimesCircle, faTrashAlt, faEdit } from "@fortawesome/free-regular-svg-icons"
import { faIgloo, faTruckLoading } from "@fortawesome/free-solid-svg-icons"
import moment from "moment"
import { useConfirm } from "material-ui-confirm"

import { Divider } from "@delivy/components"

import { Package, EditPackageData } from "@delivy/pages/Dashboard/Overview"

interface PackageListProps {
	packages: Array<Package>
	loading: boolean
	onEdit: (data: EditPackageData) => any
	onDelete: (deliveryPackageId: number) => any
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
	const { loading, packages, onEdit, onDelete } = props

	const theme = useTheme()

	const confirm = useConfirm()

	const handleDeleteDeliveryPackage = async (deliveryPackageId: number) => {
		return confirm({
			description: "You will need to make a new subscription in order to get in touch with it."
		})
		.then(() => onDelete(deliveryPackageId))
		.catch(() => {})
	}

	if (loading) {
		return (
			<Fade in={loading}>
				<PackageListSkeleton size={5} />
			</Fade>
		)
	} else {
		return (
			<Fade in={!loading}>
				{packages.length ? (
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
													{deliveryPackage.last_update ? moment(deliveryPackage.last_update).format("ll") : "No update"}
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

											<Grid container alignItems="center" item xs={1} sm={1} md={1} lg={1} xl={1}>
												<IconButton onClick={() => onEdit(deliveryPackage)}>
													<FontAwesomeIcon icon={faEdit} color="#333" style={{ fontSize: 18 }} />
												</IconButton>
												<IconButton onClick={() => handleDeleteDeliveryPackage(deliveryPackage.id)}>
													<FontAwesomeIcon icon={faTrashAlt} color="#333" style={{ fontSize: 18 }} />
												</IconButton>
											</Grid>
										</MenuItem>
									</MenuList>
								</Grow>
							)}
						)}
					</>
				) : (
					<Typography style={{ opacity: 0.5 }}>No package found :(</Typography>
				)}
			</Fade>
		)
	}
}

export default PackageList
