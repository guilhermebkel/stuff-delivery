import { Consumer, Server, Database } from "@shared/core"

import Tracker from "@hermes/core/Tracker"

import routes from "@hermes/routes"
import models from "@hermes/models"
import jobs from "@hermes/jobs"

class App {
	static async start(): Promise<void> {
		console.log("- Hermes started!\n")

		await Database.start(models)
		Server.setup(routes)
		await Consumer.process(jobs)
		Tracker.init()
	}
}

export default App