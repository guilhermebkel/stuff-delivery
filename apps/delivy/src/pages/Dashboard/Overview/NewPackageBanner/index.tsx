import React from "react"
import { Grid, makeStyles, useTheme, Typography, Button } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

import droneDeliveryIllustration from "@delivy/assets/illustrations/drone-delivery.png"
import boxPackIllustration from "@delivy/assets/illustrations/box-pack.png"

import { Divider } from "@delivy/components"

const useStyle = makeStyles(theme => ({
	newPackageBannerContainer: {
		backgroundColor: "#FFF",
		width: "700px",
		height: "235px",
		borderRadius: "20px",
		position: "relative",
		marginTop: "8px"
	},
	leftSideContainer: {
		backgroundColor: theme.palette.primary.main,
		width: "50%",
		height: "100%",
		borderTopLeftRadius: "20px",
		borderBottomLeftRadius: "20px",
		padding: "15px 20px",
		"&:before": {
			content: "close-quote",
			display: "block",
			position: "absolute",
			borderRadius: "51% 100%",
			width: "40px",
			height: "125px",
			backgroundColor: "#FFF",
			right: "325px",
			top: 0
		},
		"&:after": {
			content: "close-quote",
			display: "block",
			position: "absolute",
			borderRadius: "40% 100%",
			width: "40px",
			height: "135px",
			backgroundColor: theme.palette.primary.main,
			right: "338px",
			top: "100px"
		}
	},
	illustration: {
		position: "absolute",
		right: "22px",
		bottom: "22px"
	},
	title: {
		color: "#FFF",
		fontWeight: "bolder",
		lineHeight: "25px",
		marginBottom: "10px"
	},
	description: {
		color: "#FFF",
		marginBottom: "10px"
	},
	boxContainer: {
		marginLeft: "30px"
	}
}))

interface NewPackageBannerProps {
	onSubmit: () => void
}

const NewPackageBanner = (props: NewPackageBannerProps) => {
	const { onSubmit } = props

	const classes = useStyle()

	const theme = useTheme()

	return (
		<Grid container className={classes.newPackageBannerContainer}>
			<Grid container alignItems="center" item className={classes.leftSideContainer}>
				<Grid>
					<Typography className={classes.title} variant="h6">
						Want to track
						<br />
						something?
					</Typography>

					<Typography className={classes.description} variant="caption">
						By clicking in the button below
						<br />
						you’ll be able to get in touch with
						<br />
						all information about your
						<br />
						package.
					</Typography>

					<Divider size={2} />

					<Button
						startIcon={<FontAwesomeIcon icon={faPlus} color={theme.palette.text.primary} />}
						variant="contained"
						color="secondary"
						style={{ fontWeight: "bold" }}
						onClick={onSubmit}
					>
						ADD PACKAGE
					</Button>
				</Grid>
				<Grid className={classes.boxContainer}>
					<img src={boxPackIllustration} alt="box pack" />
				</Grid>
			</Grid>
			<img src={droneDeliveryIllustration} alt="delivery" className={classes.illustration} />
		</Grid>
	)
}

export default NewPackageBanner
