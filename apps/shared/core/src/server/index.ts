import express, { Express, RequestHandler } from "express"
import Http, { Server as HttpServer } from "http"
import Socket, { Server as SocketServer } from "socket.io"

import serverConfig from "./config"

import defaultMiddlewares from "./middlewares"

class Server {
	private server: HttpServer
	private app: Express
	private socket: SocketServer

	constructor() {
		this.app = express()
		this.server = Http.createServer(this.app)
		this.socket = Socket(this.server)
	}

	setup(routes: any[], middlewares: RequestHandler[] = defaultMiddlewares): void {
		this.setupMiddlewares(middlewares)
		this.setupRoutes(routes)
		this.initializeServer()
	}

	setupRoutes(routes: any): void {
		this.app.use(routes)
	}

	setupMiddlewares(middlewares: RequestHandler[]): void {
		middlewares.forEach(middleware => this.app.use(middleware))
	}

	private initializeServer(): void {
		this.server.listen(serverConfig.port, () => {
			console.log(`Server is running... [PORT ${serverConfig.port}]`)
		})
	}
}

export default new Server()
