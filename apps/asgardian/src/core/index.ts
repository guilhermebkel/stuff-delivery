import { Server, Database, Rpc } from "@shared/core"

import routes from "@asgardian/routes"
import models from "@asgardian/models"
import implementations from "@asgardian/implementations"

class App {
	static async start(): Promise<void> {
		console.log("- Asgardian started!\n")

		await Database.start(models)
		Server.setup(routes)
		Rpc.setup("Asgardian", implementations)
	}
}

export default App