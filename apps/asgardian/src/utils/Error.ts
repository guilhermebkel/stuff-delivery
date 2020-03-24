import * as Sentry from "@sentry/node"

import sentryConfig from "@asgardian/config/sentry"

class ErrorUtil {
	constructor() {
		Sentry.init(sentryConfig)
	}

	handle(error: Error) {
		Sentry.captureException(error)
	}
}

export default new ErrorUtil()
