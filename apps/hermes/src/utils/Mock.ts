import { Database } from "@shared/core"

import models from "@hermes/models"

class MockUtil {
	setupDatabase() {
		Database.setupConnection()
		Database.setupModels(models)
	}
}

export default new MockUtil()