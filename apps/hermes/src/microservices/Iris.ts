import { Iris } from "@shared/protos"

import RpcService from "@shared/rpc"

import irisConfig from "@hermes/config/iris"

const IrisMicroservice = RpcService.loadService<Iris>({
	serviceName: "Iris",
	address: irisConfig.address || "localhost:3051"
})

export default IrisMicroservice