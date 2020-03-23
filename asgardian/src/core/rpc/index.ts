import path from "path"
import grpc, { GrpcObject, Server } from "grpc"
import * as protoLoader from "@grpc/proto-loader"

// import implementations from "~/implementations"
import rpcConfig from "@config/rpc"

class Rpc {
	proto: GrpcObject
	server: Server

	constructor() {
		const protoPath = path.resolve(__dirname, "pb", "messages.proto")

		const packageDefinition = protoLoader.loadSync(protoPath,
			{
				keepCase: true,
				longs: String,
				enums: String,
				defaults: true,
				oneofs: true,
			}
		)

		this.proto = grpc.loadPackageDefinition(packageDefinition)

		this.server = new grpc.Server()
	}

	setup() {
		this.setupServices()
		this.setupServer()
		this.initServer()
	}

	setupServices() {
		// this.server.addService(this.proto.UserService.service, implementation)
	}

	setupServer() {
		this.server.bind(`0.0.0.0:${rpcConfig.port}`, grpc.ServerCredentials.createInsecure())
	}

	initServer() {
		this.server.start()
		console.log(`RPC is running... [PORT ${rpcConfig.port}]`)
	}
}

export default new Rpc()
