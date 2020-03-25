import { handleUnaryCall } from "grpc"

import {
	IIsAuthenticatedRequest,
	IIsAuthenticatedResponse,
	IParseAuthTokenRequest,
	IParseAuthTokenResponse
} from "@protos"

import DecodeUserAuthTokenService from "@asgardian/services/DecodeUserAuthToken"
import CheckAuthenticationUtil from "@asgardian/utils/CheckAuthentication"

interface AsgardianAuth {
	isAuthenticated: handleUnaryCall<IIsAuthenticatedRequest, IIsAuthenticatedResponse>
	parseAuthToken: handleUnaryCall<IParseAuthTokenRequest, IParseAuthTokenResponse>
}

const AuthImplementation: AsgardianAuth = {
	isAuthenticated(call, callback) {
		const { token } = call.request

		if (!token) {
			return callback(null, {
				error: "NoAuthTokenProvided",
				success: false
			})
		}

		const isAuthenticated = CheckAuthenticationUtil.run(token)

		if (isAuthenticated) {
			return callback(null, { success: true })
		} else {
			return callback(null, {
				error: "InvalidToken",
				success: false
			})
		}
	},
	parseAuthToken(call, callback) {
		const { token } = call.request

		if (!token) {
			return callback(null, {
				error: "NoAuthTokenProvided",
				success: false,
				tokenData: null
			})
		}

		const decoded = DecodeUserAuthTokenService.run(token)

		if (decoded) {
			return callback(null, {
				success: true,
				tokenData: decoded
			})
		} else {
			return callback(null, {
				error: "InvalidToken",
				success: false,
				tokenData: null
			})
		}
	}
}

export default AuthImplementation
