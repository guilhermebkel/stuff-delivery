import { Consumer, Server, Database } from "@shared/core"

import routes from "@hermes/routes"
import models from "@hermes/models"

class App {
	static async start(): Promise<void> {
		console.log("- Hermes started!\n")

		await Database.start(models)
		Server.setup(routes)
		// await Consumer.process()
	}
}

export default App