import { Response } from "express"
import { AuthRequest } from "@shared/request"

import ResponseService from "@shared/response"
import MakeNewTrackSubscriptionService from "@hermes/services/MakeNewTrackSubscription"
import ValidateNewTrackSubscriptionService from "@hermes/services/ValidateNewTrackSubscriptionSchema"

class TrackController {
	async makeSubscription(req: AuthRequest, res: Response) {
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
