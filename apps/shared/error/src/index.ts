import * as Sentry from "@sentry/node"

import sentryConfig from "./config"

class ErrorService {
	constructor() {
		Sentry.init(sentryConfig)
	}

	handle(error: Error) {
		Sentry.captureException(error)
	}
}

export default new ErrorService()
