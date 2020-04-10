import React, { useState } from "react"
import Snackbar, { SnackbarProps } from "@material-ui/core/Snackbar"
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert"
import { ThemeProvider } from "@material-ui/core"

import theme from "../../styles/theme"

import NodeUtil from "../../utils/Node"

interface NotificationType {
	type: "success" | "info" | "warning" | "error"
}

interface NotificationProps {
	message: string | React.ReactNode
}

const Alert = (props: AlertProps) => (
	<MuiAlert {...props} />
)

const Notification = (props: NotificationProps & NotificationType) => {
	const { type, message } = props

	const [visible, setVisible] = useState(true)

	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === "clickaway") {
      return;
		}

		setVisible(false)
	}

	const alertProps: AlertProps = {
		elevation: 6,
		variant: "filled",
		severity: type,
		style: {
			padding: "12px 20px"
		}
	}

	const snackbarProps: SnackbarProps = {
		anchorOrigin: {
			vertical: "top",
			horizontal: "right"
		},
	}

	return (
		<ThemeProvider theme={theme}>
			<Snackbar open={visible} autoHideDuration={4000} onClose={handleClose} {...snackbarProps}>
				<Alert onClose={handleClose} {...alertProps}>
					{message}
				</Alert>
			</Snackbar>
		</ThemeProvider>
	)
}

Notification.success = ({ message }: NotificationProps) => {
	return NodeUtil.renderComponent(
		"notification",
		<Notification type="success" message={message} />
	)
}

Notification.error = ({ message }: NotificationProps) => {
	return NodeUtil.renderComponent(
		"notification",
		<Notification type="error" message={message} />
	)
}

Notification.warning = ({ message }: NotificationProps) => {
	return NodeUtil.renderComponent(
		"notification",
		<Notification type="warning" message={message} />
	)
}

Notification.info = (message: string) => {
	return NodeUtil.renderComponent(
		"notification",
		<Notification type="info" message={message} />
	)
}

export default Notification