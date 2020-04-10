import React, { useEffect } from "react"
import { Grid, makeStyles, useTheme } from "@material-ui/core"
import lottie from "lottie-web"
import { JackInTheBox, Pulse, Fade } from "react-awesome-reveal"

import deliveryManAnimation from "../../assets/animations/delivery-man.json"
import fullLogo from "../../assets/full-logo.png"

const LOADING_TAG_ID = "loading"

interface LoadingProps {
	loading: boolean
	background?: string
	children: React.ReactNode
}

const useStyle = makeStyles({
	container: {
		height: "100vh"
	},
	loadingAnimation: {
		width: 400,
		height: "auto"
	},
	logo: {
		width: "150px"
	}
})

const Loading = (props: LoadingProps) => {
	const { loading, children } = props

	const classes = useStyle()

	const theme = useTheme()

	const initAnimation = () => {
		lottie.loadAnimation({
			container: document.getElementById(LOADING_TAG_ID) as any,
			renderer: "canvas",
			loop: true,
			autoplay: true,
			animationData: deliveryManAnimation
		})
	}

	useEffect(() => {
		initAnimation()
	}, [])

	return (
		<>
			<div style={{ height: "100vh", width: "100vw", overflow: "hidden", position: "absolute" }}>
				<Fade reverse={!loading}>
					<JackInTheBox>
						<Pulse>
							<Grid
								container
								justify="center"
								alignItems="center"
								className={classes.container}
								direction="column"
								style={{ backgroundColor: theme.palette.background.default }}
							>
								<img src={fullLogo} className={classes.logo} alt="StuffDelivery" />
								<div id={LOADING_TAG_ID} className={classes.loadingAnimation} />
							</Grid>
						</Pulse>
					</JackInTheBox>
				</Fade>
			</div>
			{!loading && children}
		</>
	)
}

Loading.defaultProps = {
	background: "#FFF"
}

export default Loading
