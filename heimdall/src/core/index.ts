import Server from "@core/server"

class App {
	static async start(): Promise<void> {
		console.log("- Heimdall started!\n")

		Server.setup()
	}
}

export default App