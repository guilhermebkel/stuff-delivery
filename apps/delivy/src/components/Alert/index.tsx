import React, { useState } from "react"
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	ThemeProvider,
	makeStyles
} from "@material-ui/core"

import NodeUtil from "@delivy/utils/Node"

import theme from "@delivy/styles/theme"

import "./icons.scss"

interface AlertType {
	type: "success" | "warning" | "error"
}

interface AlertProps {
	title: string
	message: string | React.ReactNode
}

const icons = {
	success: (
		<div className="sa">
			<div className="sa-success">
				<div className="sa-success-tip"></div>
				<div className="sa-success-long"></div>
				<div className="sa-success-placeholder"></div>
				<div className="sa-success-fix"></div>
			</div>
		</div>
	),
	error: (
		<div className="sa">
			<div className="sa-error">
				<div className="sa-error-x">
					<div className="sa-error-left"></div>
					<div className="sa-error-right"></div>
				</div>
				<div className="sa-error-placeholder"></div>
				<div className="sa-error-fix"></div>
			</div>
		</div>
	),
	warning: (
		<div className="sa">
			<div className="sa-warning">
				<div className="sa-warning-body"></div>
				<div className="sa-warning-dot"></div>
			</div>
		</div>
	)
}

const useStyle = makeStyles({
	content: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		textAlign: "center"
	},
	title: {
		fontWeight: "bolder",
		textAlign: "center"
	},
	footer: {
		justifyContent: "center",
	}
})

const Alert = (props: AlertProps & AlertType) => {
	const { type, message, title } = props

	const [visible, setVisible] = useState(true)

	const classes = useStyle()

	const handleClose = () => {
		setVisible(false)
	}

	return (
		<ThemeProvider theme={theme}>
			<Dialog
				open={visible}
				onClose={handleClose}
				fullWidth={true}
			>
				<DialogTitle className={classes.title}>{title}</DialogTitle>
				<DialogContent dividers className={classes.content}>
					{icons[type]}
					<DialogContentText>
						{message}
					</DialogContentText>
				</DialogContent>
				<DialogActions className={classes.footer}>
					<Button onClick={handleClose} fullWidth={true}>
						OK
					</Button>
				</DialogActions>
			</Dialog>
		</ThemeProvider>
	)
}

Alert.success = ({ title, message }: AlertProps) => {
	return NodeUtil.renderComponent(
		"alert",
		<Alert type="success" message={message} title={title} />
	)
}

Alert.error = ({ title, message }: AlertProps) => {
	return NodeUtil.renderComponent(
		"alert",
		<Alert type="error" message={message} title={title} />
	)
}

Alert.warning = ({ title, message }: AlertProps) => {
	return NodeUtil.renderComponent(
		"alert",
		<Alert type="warning" message={message} title={title} />
	)
}

export default Alert