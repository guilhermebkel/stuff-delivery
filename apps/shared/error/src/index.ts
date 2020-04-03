import * as Sentry from "@sentry/node"

import sentryConfig from "./config"

class ErrorService {
	constructor() {
		Sentry.init(sentryConfig)
	}

	handle(error: Error) {
		if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
			console.error(error)
		} else {
			Sentry.captureException(error)
		}
	}
}

export default new ErrorService()
