import { Response,  } from "express"
import { sendUnaryData } from "grpc"

type ResponseError =
"InvalidDataSupplied" |
"InvalidCredentials" |
"ServiceFailed" |
"UserAlreadyExists" |
"NoAuthTokenProvided" |
"NotAuthenticated" |
"NotAuthenticatedAdmin" |
"MalformedTokenHeaders"

interface ResponseErrorMessage {
	id: string
	message: string
}

interface ResponseJsonData {
	error?: ResponseError
	messages?: ResponseErrorMessage
	message?: string
	[key: string]: any
}

interface ResponseRpcData {
	error?: ResponseError
}

class ResponseService {
	json(res: Response, status: number, data: ResponseJsonData) {
		let success: boolean = false

		if (status >= 200 && status <= 299) {
			success = true
		}

		const json: ResponseJsonData & { success: boolean } = {
			...data,
			success
		}

		return res.status(status).json(json)
	}

	rpc<RpcResponse>(callback: sendUnaryData<RpcResponse>, data: ResponseRpcData & RpcResponse) {
		let success: boolean = false

		if (!data.error) {
			success = true
		}

		const rpc: ResponseRpcData & { success: boolean } = {
			...data,
			success
		}

		return callback(null, rpc as RpcResponse | any)
	}
}

export default new ResponseService()
