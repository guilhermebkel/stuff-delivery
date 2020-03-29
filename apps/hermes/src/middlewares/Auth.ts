import { Response, NextFunction } from "express"

import AsgardianMicroservice from "@hermes/microservices/Asgardian"

import ResponseService from "@shared/response"
import RequestService, { AuthRequest, AuthData } from "@shared/request"

class AuthMiddleware {
	async isAuthenticated(req: AuthRequest, res: Response, next: NextFunction) {
		const token = RequestService.retrieveTokenFromHeaders(req.headers)

		if (!token) {
			return ResponseService.json(res, 400, { error: "MalformedTokenHeaders" })
		}

		const isAuthenticated = await AsgardianMicroservice.isAuthenticated({ token })

		if (!isAuthenticated.tokenData) {
			return ResponseService.json(res, 401, { error: "NotAuthenticated" })
		}

		req.authData = {
			admin: isAuthenticated.tokenData.admin,
			id: isAuthenticated.tokenData.id,
			email: isAuthenticated.tokenData.email
		} as AuthData

		next()
	}

	async isAdmin(req: AuthRequest, res: Response, next: NextFunction) {
		const token = RequestService.retrieveTokenFromHeaders(req.headers)

		if (!token) {
			return ResponseService.json(res, 400, { error: "MalformedTokenHeaders" })
		}

		const isAuthenticated = await AsgardianMicroservice.isAuthenticated({ token, authType: "admin" })

		if (!isAuthenticated.tokenData) {
			return ResponseService.json(res, 401, { error: "NotAuthenticated" })
		}

		req.authData = {
			admin: isAuthenticated.tokenData.admin,
			id: isAuthenticated.tokenData.id,
			email: isAuthenticated.tokenData.email
		} as AuthData

		next()
	}
}

export default new AuthMiddleware()
