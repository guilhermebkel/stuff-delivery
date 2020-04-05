import { Rpc, Consumer } from "@shared/core"

import implementations from "@iris/implementations"
import jobs from "@iris/jobs"

class App {
	static async start(): Promise<void> {
		console.log("- Iris started!\n")

		Rpc.setup("Iris", implementations)
		Consumer.process(jobs)
	}
}

export default App