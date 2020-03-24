import Consumer from "@hermes/core/consumer"
import Server from "@hermes/core/server"
import Database from "@hermes/core/database"

class App {
	static async start(): Promise<void> {
		console.log("- Hermes started!\n")

		await Database.start()
		Server.setup()
		await Consumer.process()
	}
}

export default App