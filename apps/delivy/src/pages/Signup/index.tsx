import React from "react"
import { useHistory } from "react-router-dom"

import {
	Grid,
	makeStyles,
	Container,
	Typography,
	TextField,
	Button
} from "@material-ui/core"

import { Divider } from "../../components"

import deliveryPicture from "../../assets/delivery.png"
import fullLogo from "../../assets/full-logo.png"

const useStyle = makeStyles({
	asidePictureContainer: {
		width: "auto",
		height: "100vh",
		backgroundColor: "#4F23A4"
	},
	asidePicture: {
		objectFit: "contain",
		width: "auto",
		height: "auto",
		maxWidth: "80%",
		maxHeight: "80%"
	},
	logo: {
		width: "150px"
	},
	formContainer: {
		padding: "0 80px"
	}
})

const Signup = () => {
	const classes = useStyle()
	const history = useHistory()

	const handleOpenLoginPage = () => {
		history.push("/login")
	}

	return (
		<Grid container>
			<Grid container xs={12} sm={12} md={4} lg={4} xl={4} justify="center" alignItems="center">
				<Container className={classes.formContainer} style={{ display: "flex", flexDirection: "column" }}>
					<img src={fullLogo} alt="Delivery stuff" className={classes.logo} />

					<Divider size={1} />

					<Typography variant="h1" color="textPrimary">
						Create an account
					</Typography>

					<Typography variant="body1" color="textPrimary">
						Start tracking your packages today.
					</Typography>

					<Divider size={2} />

					<TextField
						required
						label="Name"
						variant="outlined"
						size="small"
					/>

					<Divider size={1} />

					<TextField
						required
						label="Email"
						variant="outlined"
						size="small"
					/>

					<Divider size={1} />

					<TextField
						required
						label="Password"
						type="password"
						variant="outlined"
						size="small"
					/>

					<Divider size={1} />

					<Button variant="contained" color="primary">
						Create account
					</Button>

					<Divider size={1} />

					<Container style={{ display: "flex", alignItems: "center" }} disableGutters>
						<Typography variant="button" color="textPrimary">
							Already have an account?
						</Typography>
						<Button color="primary" onClick={handleOpenLoginPage}>Click here</Button>
					</Container>
				</Container>
			</Grid>
			<Grid container xs={12} sm={12} md={8} lg={8} xl={8} className={classes.asidePictureContainer} justify="center" alignItems="center">
				<img src={deliveryPicture} alt="People delivery package to each other" className={classes.asidePicture} />
			</Grid>
		</Grid>
	)
}

export default Signup
