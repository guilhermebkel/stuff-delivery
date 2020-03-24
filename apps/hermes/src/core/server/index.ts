import express, { Express } from "express"
import Http, { Server as HttpServer } from "http"
import Socket, { Server as SocketServer } from "socket.io"

import serverConfig from "@hermes/config/server"

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
		this.initializeServer()
	}

	private initializeServer(): void {
		this.server.listen(serverConfig.port, () => {
			console.log(`Server is running... [PORT ${serverConfig.port}]`)
		})
	}
}

export default new Server()
