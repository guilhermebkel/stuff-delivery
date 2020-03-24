import grpc, { GrpcObject, Server } from "grpc"

import RpcService from "@rpc"

import rpcConfig from "@asgardian/config/rpc"

import implementation from "@asgardian/implementation"

class Rpc {
	proto: GrpcObject
	server: Server

	constructor() {
		this.proto = RpcService.loadProto("Asgardian")

		this.server = new grpc.Server()
	}

	setup() {
		this.server.addService((this.proto["Asgardian"] as any).service, implementation)
		this.server.bind(`0.0.0.0:${rpcConfig.port}`, grpc.ServerCredentials.createInsecure())

		this.server.start()
		console.log(`RPC is running... [PORT ${rpcConfig.port}]`)
	}
}

export default new Rpc()
