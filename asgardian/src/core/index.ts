import Consumer from "@core/consumer"
import Server from "@core/server"
import Database from "@core/database"
import Rpc from "@core/rpc"

class App {
	static async start(): Promise<void> {
		console.log("- Asgardian started!\n")

		await Database.start()
		Server.setup()
		Rpc.setup()
		await Consumer.process()
	}
}

export default App