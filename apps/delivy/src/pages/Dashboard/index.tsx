import React, { useState, useEffect } from "react"
import moment from "moment"
import { useLocation, Link, useHistory } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faCalendarAlt, faUserCircle } from "@fortawesome/free-regular-svg-icons"
import { faHome, faCalculator, faPowerOff } from "@fortawesome/free-solid-svg-icons"
import {
	makeStyles,
	Grid,
	useTheme,
	IconButton,
	MenuItem,
	MenuList,
	Typography,
	Badge,
	Tooltip,
	Drawer,
	Menu,
	Fade
} from "@material-ui/core"

import { Loading, Divider } from "@delivy/components"

import DashboardRoutes from "@delivy/routes/dashboard"

import AuthService from "@delivy/services/Auth"
// import ApiService from "@delivy/services/Api"

import useValidation from "@delivy/hooks/useValidation"

import fullLogo from "@delivy/assets/full-logo.png"

const useStyle = makeStyles({
	routesContainer: {
		borderRadius: "20px",
		margin: "10px 10px 10px 0",
		padding: "30px 40px",
		flex: 1
	},
	logo: {
		width: "auto",
		height: "50px"
	},
	asideHeader: {
		justifyContent: "space-between",
		padding: "0 25px"
	},
	selectedBar: {
		height: "55px",
		width: "5px"
	},
	selectedBackground: {
		background: "linear-gradient(90deg, rgba(114, 51, 235, 0.215) 0%, rgba(38, 36, 68, 0.5) 100%)",
		paddingLeft: "20px",
		width: "100%",
		height: "55px"
	},
	nonSelectedBackground: {
		paddingLeft: "25px",
		width: "100%",
		height: "55px"
	},
	notificationTime: {
		opacity: 0.7,
		marginBottom: "10px"
	}
})

const isMobile = window.innerWidth < 500

interface CustomMenuItemProps {
	path: string
	selected: boolean
	icon: React.ReactNode,
	name: string
}

interface Notification {
	date: Date
	title: string
	description: string
	seen: boolean
}

const Dashboard = () => {
	const [loading, setLoading] = useState(true)

	const [menu, setMenu] = useState<null | HTMLElement>(null)
	const [notifications, setNotifications] = useState<Notification[]>([])

	const { triggerValidation } = useValidation()

	const theme = useTheme()

	const classes = useStyle()

	const location = useLocation()
	const history = useHistory()

	const handleOpenNotificationMenu = (event: React.MouseEvent<HTMLElement>) => {
		setMenu(event.currentTarget)
	}

	const handleCloseNotificationMenu = () => {
		setMenu(null)
	}

	const isSelected = (name: string[]) => {
		const { pathname } = location

		const params = pathname.split("/")

		if (params.some(param => name.includes(param))) {
			return true
		} else {
			return false
		}
	}

	const handleRedirect = () => {
		const { pathname } = location

		if (pathname === "/dashboard") {
			history.push("/dashboard/overview")
		}
	}

	const getData = async () => {
		try {
			// await ApiService("asgardian").get("/data")

			await new Promise(resolve => setTimeout(resolve, 2000))

			setNotifications([])

			setLoading(false)
		} catch(error) {
			triggerValidation(error)
		}
	}

	const CustomMenuItem = (props: CustomMenuItemProps) => {
		const { path, selected, icon, name } = props

		return (
			<Link to={path} style={{ textDecoration: "none" }}>
				<MenuItem disableGutters>
					{selected && <div className={classes.selectedBar} style={{ backgroundColor: theme.palette.primary.main }} />}
					<Grid container alignContent="center" alignItems="center" className={selected ? classes.selectedBackground : classes.nonSelectedBackground}>
						<FontAwesomeIcon icon={icon as any} color={selected ? theme.palette.background.default : "#8381A0"} />
						<Typography style={{ marginLeft: "20px", color: selected ? theme.palette.background.default : "#8381A0" }}>{name}</Typography>
					</Grid>
				</MenuItem>
			</Link>
		)
	}

	useEffect(() => {
		handleRedirect()
		getData()
	}, [])

	return (
		<Loading loading={loading}>
			<Grid container style={{ backgroundColor: theme.palette.info.main, userSelect: "none" }}>
				<Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
					<Drawer
						variant={isMobile ? "temporary" : "permanent"}
						open
						anchor="left"
						PaperProps={{
							style: isMobile ? ({
								backgroundColor: theme.palette.info.main
							}) : ({
								backgroundColor: "transparent", position: "relative", borderRight: "0 solid transparent"
							})
						}}
					>
						<Divider size={2} />

						<Grid container item className={classes.asideHeader}>
							<img src={fullLogo} className={classes.logo} style={isMobile ? { height: "45px" } : {}} alt="logo" />
							
							<Grid>
								<Tooltip title="Notifications">
									<IconButton onClick={handleOpenNotificationMenu}>
										<Badge badgeContent={notifications.filter(notification => !notification.seen).length} color="primary">
											<FontAwesomeIcon icon={faBell} color={theme.palette.background.default} size="sm" />
										</Badge>
									</IconButton>
								</Tooltip>

								<Menu
									anchorEl={menu}
									keepMounted
									open={!!menu}
									onClose={handleCloseNotificationMenu}
									TransitionComponent={Fade}
									transformOrigin={{ vertical: "top", horizontal: "center" }}
									style={{ marginTop: "70px", maxHeight: "370px" }}
								>
									{notifications.length ? (
										<>
											{notifications.map(notification => (
												<MenuItem divider>
													<Grid container direction="column" style={{ width: "300px" }}>
														<Typography variant="caption" className={classes.notificationTime}>{moment(notification.date)}</Typography>

														<Typography variant="body1">{notification.title}</Typography>
														
														<Typography variant="body2">{notification.description}</Typography>
													</Grid>
												</MenuItem>
											))}
										</>
									) : (
										<MenuItem>
											<Grid container style={{ width: "300px" }}>
												<Typography variant="body2">It looks you have no new notifications...</Typography>
											</Grid>
										</MenuItem>
									)}
								</Menu>

								<Tooltip title="Logout">
									<IconButton onClick={() => AuthService.logout()}>
										<FontAwesomeIcon icon={faPowerOff} color={theme.palette.background.default} size="sm" />
									</IconButton>
								</Tooltip>
							</Grid>
						</Grid>

						<Divider size={2} />

						<MenuList>
							<CustomMenuItem
								icon={faHome}
								name="Overview"
								selected={isSelected(["overview"])}
								path="/dashboard/overview"
							/>

							<CustomMenuItem
								icon={faCalendarAlt}
								name="History"
								selected={isSelected(["history"])}
								path="/dashboard/history"
							/>

							<CustomMenuItem
								icon={faCalculator}
								name="Calculator"
								selected={isSelected(["calculator"])}
								path="/dashboard/calculator"
							/>

							<CustomMenuItem
								icon={faUserCircle}
								name="Account"
								selected={isSelected(["account"])}
								path="/dashboard/account"
							/>
						</MenuList>
					</Drawer>
				</Grid>
				<Grid
					item
					xs={12} sm={12} md={8} lg={9} xl={9}
					style={{ height: "100%", display: "flex", flexDirection: "column" }}
				>
					<Grid
						item
						className={classes.routesContainer}
						style={{ backgroundColor: theme.palette.background.default }}
					>
						<DashboardRoutes />
					</Grid>
				</Grid>
			</Grid>
		</Loading>
	)
}

export default Dashboard
