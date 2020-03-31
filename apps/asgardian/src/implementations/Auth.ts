import { ServerUnaryCall, sendUnaryData } from "grpc"

import { IIsAuthenticatedRequest, IIsAuthenticatedResponse } from "@shared/protos"

import DecodeUserAuthTokenService from "@asgardian/services/DecodeUserAuthToken"
import ResponseService from "@shared/response"

class AuthImplementation {
	isAuthenticated(call: ServerUnaryCall<IIsAuthenticatedRequest>, callback: sendUnaryData<IIsAuthenticatedResponse>) {
		const { token, authType } = call.request

		if (!token) {
			return ResponseService.rpc<IIsAuthenticatedResponse>(callback, {
				error: "NoAuthTokenProvided",
				tokenData: null
			})
		}

		const decoded = DecodeUserAuthTokenService.run(token)

		if (!decoded) {
			return ResponseService.rpc<IIsAuthenticatedResponse>(callback, {
				error: "NotAuthenticated",
				tokenData: null
			})
		}

		if (authType === "admin" && decoded.admin === false) {
			return ResponseService.rpc<IIsAuthenticatedResponse>(callback, {
				error: "NotAuthenticatedAdmin",
				tokenData: null
			})
		} else {
			return ResponseService.rpc<IIsAuthenticatedResponse>(callback, { tokenData: decoded })
		}
	}
}

export default AuthImplementation
