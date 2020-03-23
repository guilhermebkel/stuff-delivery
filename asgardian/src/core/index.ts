import Consumer from "@core/consumer"
import Server from "@core/server"
import Database from "@core/database"

class App {
	static async start(): Promise<void> {
		console.log("- Asgardian started!\n")

		await Database.start()
		Server.setup()
		await Consumer.process()
	}
}

export default App