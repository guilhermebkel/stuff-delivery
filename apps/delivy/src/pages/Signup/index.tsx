import React, { useState } from "react"
import { useHistory } from "react-router-dom"

import {
	Grid,
	makeStyles,
	Container,
	Typography,
	TextField,
	Button,
	CircularProgress,
	useTheme
} from "@material-ui/core"

import { Divider, Form } from "../../components"

import ApiService from "../../services/Api"
import AuthService from "../../services/Auth"

import deliveryPicture from "../../assets/delivery.png"
import fullLogo from "../../assets/full-logo.png"

const isMobile = window.innerWidth < 962

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
		padding: isMobile ? "0 40px" : "0 60px"
	}
})

const Signup = () => {
	const classes = useStyle()
	const history = useHistory()
	const theme = useTheme()

	const [signupData, setSignupData] = useState({ name: "", email: "", password: "" })
	const [loadingSignup, setLoadingSignup] = useState(false)

	const handleOpenLoginPage = () => {
		history.push("/login")
	}

	const handleInputChange = (key: string, value: string) => {
		setSignupData({
			...signupData,
			[key]: value
		})
	}

	const handleSignup = async () => {
		setLoadingSignup(true)
	
		try {
			const response = await ApiService("asgardian").post("/signup", { ...signupData })

			const { token } = response.data

			AuthService.login(token)
		} catch(error) {
			console.error(error)
		}
	
		setLoadingSignup(false)
	}

	return (
		<Grid container>
			<Grid container xs={12} sm={12} md={6} lg={4} xl={3} justify="center" alignItems="center" style={{ backgroundColor: theme.palette.background.default }}>
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

					<Form>
						<TextField
							required
							label="Name"
							variant="outlined"
							size="small"
							value={signupData.name}
							onChange={({ target }) => handleInputChange("name", target.value)}
						/>

						<Divider size={1} />

						<TextField
							required
							label="Email"
							variant="outlined"
							size="small"
							value={signupData.email}
							onChange={({ target }) => handleInputChange("email", target.value)}
						/>

						<Divider size={1} />

						<TextField
							required
							label="Password"
							type="password"
							variant="outlined"
							size="small"
							value={signupData.password}
							onChange={({ target }) => handleInputChange("password", target.value)}
						/>

						<Divider size={1} />

						<Button
							variant="contained"
							color="primary"
							onClick={handleSignup}
							endIcon={loadingSignup && <CircularProgress size={20} />}
							disabled={loadingSignup}
							type="submit"
						>
							Create account
						</Button>
					</Form>

					<Divider size={1} />

					<Container style={{ display: "flex", alignItems: "center" }} disableGutters>
						<Typography variant="button" color="textPrimary">
							Already have an account?
						</Typography>
						<Button color="primary" onClick={handleOpenLoginPage}>Click here</Button>
					</Container>
				</Container>
			</Grid>
			{!isMobile && (
				<Grid container xs={12} sm={12} md={6} lg={8} xl={9} className={classes.asidePictureContainer} justify="center" alignItems="center">
					<img src={deliveryPicture} alt="People delivery package to each other" className={classes.asidePicture} />
				</Grid>
			)}
		</Grid>
	)
}

export default Signup
