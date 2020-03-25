import { Asgardian } from "@protos"

import RpcService from "@rpc"

import asgardianConfig from "@hermes/config/asgardian"

const AsgardianMicroservice = RpcService.loadService<Asgardian>({
	serviceName: "Asgardian",
	address: asgardianConfig.address || "localhost:3041"
})

export default AsgardianMicroservice