import express, { Express } from "express"
import Http, { Server as HttpServer } from "http"
import Socket, { Server as SocketServer } from "socket.io"

import serverConfig from "@asgardian/config/server"

import routes from "@asgardian/routes"
import middlewares from "@asgardian/core/server/middlewares"

class Server {
	private server: HttpServer
	private app: Express
	private socket: SocketServer

	constructor() {
		this.app = express()
		this.server = Http.createServer(this.app)
		this.socket = Socket(this.server)
	}

	setup(): void {
		this.setupMiddlewares()
		this.setupRoutes()
		this.initializeServer()
	}

	setupRoutes(): void {
		this.app.use(routes)
	}

	setupMiddlewares(): void {
		middlewares.forEach(middleware => this.app.use(middleware))
	}

	private initializeServer(): void {
		this.server.listen(serverConfig.port, () => {
			console.log(`Server is running... [PORT ${serverConfig.port}]`)
		})
	}
}

export default new Server()
