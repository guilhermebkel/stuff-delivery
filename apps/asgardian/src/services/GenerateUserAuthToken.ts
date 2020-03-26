import * as jwt from "jsonwebtoken"

import ErrorService from "@shared/error"

import { UserAuthTokenData } from "@asgardian/interfaces/UserAuth"

import jwtConfig from "@asgardian/config/jwt"

class GenerateUserAuthTokenService {
	run(data: UserAuthTokenData) {
		try {
			const token = jwt.sign(data, jwtConfig.userAuth.secret, jwtConfig.userAuth.options)

			return token
		} catch(error) {
			ErrorService.handle(error)
			return null
		}
	}
}

export default new GenerateUserAuthTokenService()
