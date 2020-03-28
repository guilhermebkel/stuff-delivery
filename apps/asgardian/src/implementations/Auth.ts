import { handleUnaryCall } from "grpc"

import {
	IIsAuthenticatedRequest,
	IIsAuthenticatedResponse,
} from "@shared/protos"

import DecodeUserAuthTokenService from "@asgardian/services/DecodeUserAuthToken"
import ResponseService from "@shared/response"

interface AsgardianAuth {
	isAuthenticated: handleUnaryCall<IIsAuthenticatedRequest, IIsAuthenticatedResponse>
}

const AuthImplementation: AsgardianAuth = {
	isAuthenticated(call, callback) {
		const { token } = call.request

		if (!token) {
			return ResponseService.rpc<IIsAuthenticatedResponse>(callback, {
				error: "NoAuthTokenProvided",
				tokenData: null
			})
		}

		const decoded = DecodeUserAuthTokenService.run(token)

		if (decoded) {
			return ResponseService.rpc<IIsAuthenticatedResponse>(callback, { tokenData: decoded })
		} else {
			return ResponseService.rpc<IIsAuthenticatedResponse>(callback, {
				error: "InvalidToken",
				tokenData: null
			})
		}
	}
}

export default AuthImplementation
