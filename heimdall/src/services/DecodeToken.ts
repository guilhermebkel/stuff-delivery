import * as jwt from "jsonwebtoken"

import ErrorUtil from "@utils/Error"

import jwtConfig from "@config/jwt"

class GenerateTokenService {
	run(token: string) {
		try {
			const decoded = jwt.verify(token, jwtConfig.userAuth.secret)

			return decoded
		} catch(error) {
			ErrorUtil.handle(error)
			return null
		}
	}	
}

export default new GenerateTokenService()
