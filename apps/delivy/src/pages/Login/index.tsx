import React, { useState } from "react"
import { useHistory } from "react-router-dom"

import {
	Grid,
	makeStyles,
	Container,
	Typography,
	TextField,
	FormControlLabel,
	Checkbox,
	Button,
	CircularProgress,
	useTheme
} from "@material-ui/core"

import { Divider, Form } from "../../components"

import ApiService from "../../services/Api"
import AuthService from "../../services/Auth"

import useValidation from "../../hooks/useValidation"

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

const Login = () => {
	const classes = useStyle()
	const history = useHistory()
	const [saveToken, setSaveToken] = useState(false)
	const theme = useTheme()

	const [loginData, setLoginData] = useState({ email: "", password: "" })
	const [loadingLogin, setLoadingLogin] = useState(false)

	const { validation, clearValidation, triggerValidation } = useValidation()

	const handleSaveTokenChange = () => {
		setSaveToken(!saveToken)
	}

	const handleOpenSignUpPage = () => {
		history.push("/signup")
	}

	const handleInputChange = (key: string, value: string) => {
		setLoginData({
			...loginData,
			[key]: value
		})

		clearValidation(key)
	}

	const handleLogin = async () => {
		setLoadingLogin(true)
	
		try {
			const response = await ApiService("asgardian").post("/login", { ...loginData })

			const { token } = response.data

			AuthService.login(token)
		} catch(error) {
			triggerValidation(error)
		}
	
		setLoadingLogin(false)
	}

	return (
		<Grid container>
			<Grid container xs={12} sm={12} md={6} lg={4} xl={3} justify="center" alignItems="center" style={{ backgroundColor: theme.palette.background.default }}>
				<Container className={classes.formContainer} style={{ display: "flex", flexDirection: "column" }}>
					<img src={fullLogo} alt="Delivery stuff" className={classes.logo} />

					<Divider size={1} />

					<Typography variant="h1" color="textPrimary">
						Welcome back
					</Typography>

					<Typography variant="body1" color="textPrimary">
						Get in touch again with your packages.
					</Typography>

					<Divider size={2} />

					<Form>
						<TextField
							required
							label="Email"
							variant="outlined"
							size="small"
							value={loginData.email}
							onChange={({ target }) => handleInputChange("email", target.value)}
							error={!!validation.email}
							helperText={validation.email}
						/>

						<Divider size={1} />

						<TextField
							required
							label="Password"
							type="password"
							variant="outlined"
							size="small"
							value={loginData.password}
							onChange={({ target }) => handleInputChange("password", target.value)}
							error={!!validation.password}
							helperText={validation.password}
						/>

						<Divider size={1} />

						<Container style={{ display: "flex", justifyContent: "space-between" }} disableGutters>
							<FormControlLabel
								control={
									<Checkbox
										checked={saveToken}
										onChange={handleSaveTokenChange}
										color="primary"
									/>
								}
								label="Remember me"
							/>

							<Button color="primary">Forgot password?</Button>
						</Container>
						
						<Divider size={1} />

						<Button
							variant="contained"
							color="primary"
							onClick={handleLogin}
							endIcon={loadingLogin && <CircularProgress size={20} />}
							disabled={loadingLogin}
							type="submit"
						>
							Login
						</Button>
					</Form>

					<Divider size={1} />

					<Container style={{ display: "flex", alignItems: "center" }} disableGutters>
						<Typography variant="button" color="textPrimary">
							Don't have an account?
						</Typography>
						<Button color="primary" onClick={handleOpenSignUpPage}>Click here</Button>
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

export default Login
