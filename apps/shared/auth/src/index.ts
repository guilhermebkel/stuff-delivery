import { Response, NextFunction, Request } from "express"
import * as jwt from "jsonwebtoken"
import { IncomingHttpHeaders } from "http"

import ErrorService from "@shared/error"

import jwtConfig from "./config"

import ResponseService from "@shared/response"

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
	constructor() {
		this.isAdminMiddleware = this.isAdminMiddleware.bind(this)
		this.isAuthenticatedMiddleware = this.isAuthenticatedMiddleware.bind(this)
	}

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

	async isAuthenticatedMiddleware(req: AuthRequest, res: AuthResponse, next: NextFunction) {
		const token = this.retrieveTokenFromHeaders(req.headers)

		if (!token) {
			return ResponseService.json(res, 400, { error: "MalformedTokenHeaders" })
		}

		const decoded = this.decodeUserAuthToken(token)

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

	async isAdminMiddleware(req: AuthRequest, res: AuthResponse, next: NextFunction) {
		const token = this.retrieveTokenFromHeaders(req.headers)

		if (!token) {
			return ResponseService.json(res, 400, { error: "MalformedTokenHeaders" })
		}

		const decoded = this.decodeUserAuthToken(token)

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
}

export default new AuthService()
