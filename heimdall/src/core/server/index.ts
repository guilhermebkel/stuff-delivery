import express, { Express } from "express"

import serverConfig from "@config/server"

import middlewares from "@core/server/middlewares"

class Server {
	private app: Express

	constructor() {
		this.app = express()
	}

	setup(): void {
		this.setupMiddlewares()
		this.initializeServer()
	}

	private initializeServer(): void {
		this.app.listen(serverConfig.port, () => {
			console.log(`Server is running... [PORT ${serverConfig.port}]`)
		})
	}

	private setupMiddlewares(): void {
		middlewares.forEach(middleware => this.app.use(middleware))
	}
}

export default new Server()
