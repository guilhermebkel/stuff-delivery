import Consumer from "@asgardian/core/consumer"
import Server from "@asgardian/core/server"
import Database from "@asgardian/core/database"
import Rpc from "@asgardian/core/rpc"

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