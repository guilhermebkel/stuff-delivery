import { Response, NextFunction, Request } from "express"
import { IncomingHttpHeaders } from "http"

import AuthService, { UserAuthTokenData } from "./index"

import ResponseService from "@shared/response"

export interface AuthRequest extends Request {
	authData: UserAuthTokenData
}

export interface AuthResponse extends Response {}

class AuthMiddleware {
	async isAuthenticated(req: AuthRequest, res: AuthResponse, next: NextFunction) {
		const token = this.retrieveTokenFromHeaders(req.headers)

		if (!token) {
			return ResponseService.json(res, 400, { error: "MalformedTokenHeaders" })
		}

		const decoded = AuthService.decodeUserAuthToken(token)

		if (!decoded) {
			return ResponseService.json(res, 401, { error: "NotAuthenticated" })
		}

		req.authData = {
			admin: decoded.admin,
			id: decoded.id,
			email: decoded.email
		}

		next()
	}

	async isAdmin(req: AuthRequest, res: AuthResponse, next: NextFunction) {
		const token = this.retrieveTokenFromHeaders(req.headers)

		if (!token) {
			return ResponseService.json(res, 400, { error: "MalformedTokenHeaders" })
		}

		const decoded = AuthService.decodeUserAuthToken(token)

		if (!decoded || !decoded.admin) {
			return ResponseService.json(res, 401, { error: "NotAuthenticated" })
		}

		req.authData = {
			admin: decoded.admin,
			id: decoded.id,
			email: decoded.email
		}

		next()
	}

	private retrieveTokenFromHeaders(headers: IncomingHttpHeaders) {
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

export default new AuthMiddleware()
