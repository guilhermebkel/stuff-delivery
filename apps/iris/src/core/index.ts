import { Rpc } from "@shared/core"

import implementations from "@iris/implementations"

class App {
	static async start(): Promise<void> {
		console.log("- Iris started!\n")

		Rpc.setup("Iris", implementations)
	}
}

export default App