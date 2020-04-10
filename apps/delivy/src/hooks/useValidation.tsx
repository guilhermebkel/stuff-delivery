import React, { useState } from "react"
import { AxiosError } from "axios"

import { Notification, Alert } from "../components"

interface Validation {
	[key: string]: any
}

const parseError = (error: AxiosError) => {
	const validationMessages = error?.response?.data?.messages
	const errorMessage = error?.message

	return {
		validationMessages,
		errorMessage
	}
}

const useValidation = () => {
	const [validation, setValidation] = useState({} as Validation)

	const triggerValidation = (error: AxiosError) => {
		const data = parseError(error)

		if (!data.validationMessages) {
			if (data.errorMessage === "Network Error") {
				Alert.error({
					title: "Server down",
					message: (
						<p>
							It looks like our servers are down :(
							<br />
							Please try again in some minutes...
						</p>
					)
				})
			} else {
				Notification.error({ message: "Something went wrong." })
			}
		} else {
			setValidation(lastValidation => ({
				...lastValidation,
				...data.validationMessages
			}))
		}
	}

	const clearValidation = (key: string) => {
		if (key in validation) {
			setValidation(lastValidation => {
				const updatedData = { ...lastValidation }

				delete updatedData[key]

				return updatedData
			})
		}
	}

	return {
		triggerValidation,
		clearValidation,
		validation
	}
}

export default useValidation
