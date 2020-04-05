import { AuthRequest, AuthResponse } from "@shared/auth"

import ResponseService from "@shared/response"
import MakeNewTrackSubscriptionService from "@hermes/services/MakeNewTrackSubscription"
import ValidateNewTrackSubscriptionService from "@hermes/services/ValidateNewTrackSubscriptionSchema"

class TrackController {
	async makeSubscription(req: AuthRequest, res: AuthResponse) {
		const newSubscriptionData = req.body

		const isNewSubscriptionSchemaValid = ValidateNewTrackSubscriptionService.run(newSubscriptionData)

		if (!isNewSubscriptionSchemaValid) {
			return ResponseService.json(res, 400, { error: "InvalidDataSupplied" })
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
}

export default new TrackController()
