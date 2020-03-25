import grpc, { GrpcObject, Server } from "grpc"

import RpcService from "@rpc"

import rpcConfig from "@asgardian/config/rpc"

import implementations from "@asgardian/implementations"

class Rpc {
	proto: GrpcObject
	server: Server

	constructor() {
		this.proto = RpcService.loadProto("Asgardian")

		this.server = new grpc.Server()
	}

	setup() {
		this.server.addService((this.proto["Asgardian"] as any).service, implementations)
		this.server.bind(`${rpcConfig.address}`, grpc.ServerCredentials.createInsecure())

		this.server.start()
		console.log(`RPC is running... [${rpcConfig.address}]`)
	}
}

export default new Rpc()
