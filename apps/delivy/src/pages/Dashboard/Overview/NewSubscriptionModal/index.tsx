import React, { useState } from "react"
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	TextField,
	DialogActions,
	Button,
	ThemeProvider,
	CircularProgress
} from "@material-ui/core"

import { Divider, Notification } from "@delivy/components"

import ApiService from "@delivy/services/Api"

import useValidation from "@delivy/hooks/useValidation"

import theme from "@delivy/styles/theme"

interface NewSubscriptionModalProps {
	onClose: () => void
	visible: boolean
}

const SUBSCRIPTION_DATA = {
	trackingCode: "",
	name: ""
}

const NewSubscriptionModal = (props: NewSubscriptionModalProps) => {
	const { onClose, visible } = props

	const [loading, setLoading] = useState(false)

	const [subscriptionData, setSubscriptionData] = useState(SUBSCRIPTION_DATA)

	const { clearValidation, triggerValidation, validation } = useValidation()

	const handleClose = async () => {
		onClose()
	}

	const handleSubmit = async () => {
		setLoading(true)

		try {
			await ApiService("hermes").post("/track", { ...subscriptionData })
			onClose()
			setSubscriptionData(SUBSCRIPTION_DATA)
			Notification.success({ message: "Your package was added with success!" })
		} catch(error) {
			triggerValidation(error)
		}

		setLoading(false)
	}

	const handleChange = (key: string, value: string) => {
		setSubscriptionData({
			...subscriptionData,
			[key]: value
		})

		clearValidation(key)
	}

	return (
		<ThemeProvider theme={theme}>
			<Dialog open={visible} onClose={handleClose}>
        <DialogTitle>Add package</DialogTitle>
        <DialogContent>
          <DialogContentText>
            In order to track your package, please enter its tracking code and name. We will send updates
            occasionally.
          </DialogContentText>

					<Divider size={1} />

          <TextField
						required
						variant="outlined"
						size="small"
						label="Name"
						placeholder="Black towel"
						fullWidth
						value={subscriptionData.name}
						onChange={({ target }) => handleChange("name", target.value)}
						error={!!validation.name}
						helperText={validation.name}
          />

					<Divider size={2} />

					<TextField
						required
						variant="outlined"
						size="small"
						label="Tracking code"
						placeholder="SS123456789BR"
						fullWidth
						value={subscriptionData.trackingCode}
						onChange={({ target }) => handleChange("trackingCode", target.value)}
						error={!!validation.trackingCode}
						helperText={validation.trackingCode}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
						onClick={handleSubmit}
						color="primary"
						type="submit"
						endIcon={loading && <CircularProgress size={20} />}
						disabled={loading}
					>
            Add package
          </Button>
        </DialogActions>
      </Dialog>
		</ThemeProvider>
	)
}

export default NewSubscriptionModal