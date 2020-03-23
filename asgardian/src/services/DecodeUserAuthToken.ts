import * as jwt from "jsonwebtoken"

import ErrorUtil from "@utils/Error"

import { UserAuthTokenData } from "@interfaces/UserAuth"

import jwtConfig from "@config/jwt"

class DecodeUserAuthTokenService {
	run(token: string) {
		try {
			const decoded = jwt.verify(token, jwtConfig.userAuth.secret)

			return decoded as UserAuthTokenData
		} catch(error) {
			ErrorUtil.handle(error)
			return null
		}
	}	
}

export default new DecodeUserAuthTokenService()
