import { Asgardian } from "@shared/protos"

import RpcService from "@shared/rpc"

import asgardianConfig from "@hermes/config/asgardian"

const AsgardianMicroservice = RpcService.loadService<Asgardian>({
	serviceName: "Asgardian",
	address: asgardianConfig.address || "localhost:3041"
})

export default AsgardianMicroservice