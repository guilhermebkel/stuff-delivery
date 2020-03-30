import grpc, { GrpcObject, Server, UntypedServiceImplementation } from "grpc"

import RpcService, { Service } from "@shared/rpc"

import rpcConfig from "./config"

class Rpc {
	proto: GrpcObject
	server: Server

	setup(serviceName: Service, implementations: UntypedServiceImplementation) {
		this.loadProto(serviceName)
		this.setupImplementations(implementations, serviceName)
	}

	loadProto(serviceName: Service) {
		this.proto = RpcService.loadProto(serviceName)

		this.server = new grpc.Server()
	}

	setupImplementations(implementations: UntypedServiceImplementation, serviceName: Service) {
		this.server.addService((this.proto[serviceName] as any).service, implementations)
		this.server.bind(`${rpcConfig.address}`, grpc.ServerCredentials.createInsecure())

		this.server.start()
		console.log(`RPC is running... [${rpcConfig.address}]`)
	}
}

export default new Rpc()
