import { Response,  } from "express"

type ResponseError = "InvalidDataSupplied" | "InvalidCredentials" | "ServiceFailed" | "UserAlreadyExists"

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
}

export default new ResponseService()
