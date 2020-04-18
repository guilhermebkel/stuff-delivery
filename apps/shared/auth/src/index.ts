export { default as AuthMiddleware } from "./middlewares/Auth"

import { Response, Request } from "express"
import * as jwt from "jsonwebtoken"
import { IncomingHttpHeaders } from "http"

import ErrorService from "@shared/error"

import jwtConfig from "./config"

export interface AuthRequest extends Request {
	authData: UserAuthTokenData
}

export interface AuthResponse extends Response {}

export interface UserAuthTokenData {
	id: number
	email: string
	admin: boolean
}

class AuthService {
	generateUserAuthToken(data: UserAuthTokenData) {
		try {
			const token = jwt.sign(data, jwtConfig.userAuth.secret, jwtConfig.userAuth.options)

			return token
		} catch(error) {
			ErrorService.handle(error)
			return null
		}
	}

	decodeUserAuthToken(token: string) {
		try {
			const decoded = jwt.verify(token, jwtConfig.userAuth.secret)

			return decoded as UserAuthTokenData
		} catch(error) {
			ErrorService.handle(error)
			return null
		}
	}

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

export default new AuthService()
