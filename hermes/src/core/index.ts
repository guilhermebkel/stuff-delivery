import Consumer from "@core/consumer"
import Server from "@core/server"

class App {
	static async start(): Promise<void> {
		console.log("- Hermes started!\n")

		Server.setup()
		await Consumer.process()
	}
}

export default App