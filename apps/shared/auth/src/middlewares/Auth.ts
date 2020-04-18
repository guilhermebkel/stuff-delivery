import { NextFunction } from "express"

import AuthService, { AuthRequest, AuthResponse } from "../index"
import ResponseService from "@shared/response"

class AuthMiddleware {
	async isAuthenticated(req: AuthRequest, res: AuthResponse, next: NextFunction) {
		const token = AuthService.retrieveTokenFromHeaders(req.headers)

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
		const token = AuthService.retrieveTokenFromHeaders(req.headers)

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
}

export default new AuthMiddleware()
