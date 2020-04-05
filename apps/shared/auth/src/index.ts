export { default as AuthMiddleware } from "./middlewares"

import * as jwt from "jsonwebtoken"

import ErrorService from "@shared/error"

import jwtConfig from "./config"

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
}

export default new AuthService()
