import path from "path"
import grpc, { GrpcObject } from "grpc"
import * as protoLoader from "@grpc/proto-loader"
import { promisify } from "util"

type Service = "Asgardian" | "Hermes" | "Iris"

interface IGRPCMethod {
  (): void
  originalName: string
}

interface ILoadServiceDTO {
  serviceName: Service
  fileName: string
  address: string
  credentials?: grpc.ChannelCredentials
}

class RpcService {
  loadProto(serviceName: Service) {
    const packageDefinition = protoLoader.loadSync(
      path.resolve(__dirname, "..", "pb", `${serviceName}.proto`),
      {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
      }
    )

    const proto = grpc.loadPackageDefinition(packageDefinition) as GrpcObject
  
    return proto
  }

  loadService<ServiceType extends protobuf.rpc.Service>({
    serviceName,
    address,
    credentials = grpc.credentials.createInsecure(),
  }: ILoadServiceDTO) {
    const proto = this.loadProto(serviceName)
  
    const client = new (proto[serviceName] as any)(address, credentials) as any
  
    // Promisify all client methods
    (Object.entries(client.__proto__) as [[string, IGRPCMethod]]).map(
      ([prop, value]) => {
        if (value.originalName !== undefined) {
          client[prop] = promisify(value)
        }
      }
    )
  
    return client as ServiceType
  }
}

export default new RpcService()
