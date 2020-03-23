import * as jwt from "jsonwebtoken"

import ErrorUtil from "@utils/Error"

import jwtConfig from "@config/jwt"

class GenerateTokenService {
	run(data: object) {
		try {
			const token = jwt.sign(data, jwtConfig.userAuth.secret, jwtConfig.userAuth.options)

			return token
		} catch(error) {
			ErrorUtil.handle(error)
			return null
		}
	}	
}

export default new GenerateTokenService()
