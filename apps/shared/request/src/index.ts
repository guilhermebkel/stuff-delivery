import { Request } from "express"
import { IncomingHttpHeaders } from "http"

export interface AuthData {
	id: number
	email: string
	admin: boolean
}

export interface AuthRequest extends Request {
	authData: AuthData
}

class RequestService {
	retrieveTokenFromHeaders(headers: IncomingHttpHeaders) {
		if (!headers || !headers.authorization) {
			return null
		}

		const [authMethod, token] = headers.authorization.split(" ")

		if (authMethod !== "Bearer") {
			return null
		} else if (!token) {
			return null
		} else {
			return token
		}
	}
}

export default new RequestService()