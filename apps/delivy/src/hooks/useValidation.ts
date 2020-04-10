import { useState } from "react"
import { AxiosError } from "axios"

import { Notification } from "../components"

const retrieveMessagesFromError = (error: AxiosError) => {
	const messages = error?.response?.data?.messages

	return messages
}

const useValidation = () => {
	const [validation, setValidation] = useState({})

	const triggerValidation = (error: AxiosError) => {
		const messages = retrieveMessagesFromError(error)

		if (!messages) {
			Notification.error("Something went wrong")
		} else {
			setValidation(lastValidation => ({
				...lastValidation,
				...messages
			}))
		}
	}

	const clearValidation = (key: string) => {
		setValidation(lastValidation => ({
			...lastValidation,
			[key]: undefined
		}))
	}

	return {
		triggerValidation,
		clearValidation,
		validation: validation as any
	}
}

export default useValidation
