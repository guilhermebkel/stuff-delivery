import { handleUnaryCall } from "grpc"

import {
	IIsAuthenticatedRequest,
	IIsAuthenticatedResponse,
} from "@shared/protos"

import DecodeUserAuthTokenService from "@asgardian/services/DecodeUserAuthToken"

interface AsgardianAuth {
	isAuthenticated: handleUnaryCall<IIsAuthenticatedRequest, IIsAuthenticatedResponse>
}

const AuthImplementation: AsgardianAuth = {
	isAuthenticated(call, callback) {
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
