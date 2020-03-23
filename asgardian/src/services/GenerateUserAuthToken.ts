import * as jwt from "jsonwebtoken"

import ErrorUtil from "@utils/Error"

import { UserAuthTokenData } from "@interfaces/UserAuth"

import jwtConfig from "@config/jwt"

class GenerateUserAuthTokenService {
	run(data: UserAuthTokenData) {
		try {
			const token = jwt.sign(data, jwtConfig.userAuth.secret, jwtConfig.userAuth.options)

			return token
		} catch(error) {
			ErrorUtil.handle(error)
			return null
		}
	}
}

export default new GenerateUserAuthTokenService()
