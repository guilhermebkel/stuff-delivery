import { AuthRequest, AuthResponse } from "@shared/auth"

import ResponseService from "@shared/response"
import MakeNewTrackSubscriptionService from "@hermes/services/MakeNewTrackSubscription"
import ValidateNewTrackSubscriptionService from "@hermes/services/ValidateNewTrackSubscriptionSchema"
import RetrieveCurrentTrackSubscriptionsService from "@hermes/services/RetrieveCurrentTrackSubscriptions"

class TrackController {
	async makeSubscription(req: AuthRequest, res: AuthResponse) {
		const newSubscriptionData = req.body

		const newSubscriptionSchemaValidation = ValidateNewTrackSubscriptionService.run(newSubscriptionData)

		if (!newSubscriptionSchemaValidation.valid) {
			return ResponseService.json(res, 400, {
				error: "InvalidDataSupplied",
				messages: newSubscriptionSchemaValidation.messages
			})
		}

		const newTrackSubscription = await MakeNewTrackSubscriptionService.run(
			newSubscriptionData,
			req.authData.id
		)

		if (newTrackSubscription) {
			return ResponseService.json(res, 201, { ...newTrackSubscription })
		} else {
			return ResponseService.json(res, 500, { error: "ServiceFailed" })
		}
	}

	async getCurrentTrackSubscriptions(req: AuthRequest, res: AuthResponse) {
		const tracks = await RetrieveCurrentTrackSubscriptionsService.run(req.authData.id)

		if (tracks) {
			return ResponseService.json(res, 200, { tracks })
		} else {
			return ResponseService.json(res, 404, { error: "ResourceNotFound" })
		}
	}
}

export default new TrackController()
