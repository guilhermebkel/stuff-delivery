import { Request, Response } from "express"

import ResponseService from "@shared/response"
import ValidatePayloadSchemaService from "@hermes/services/ValidatePayloadSchema"
import RegisterNewPayloadService from "@hermes/services/RegisterNewPayload"
import EventService from "@shared/event"

class PayloadController {
	async registerNewPayload(req: Request, res: Response) {
		const payloadData = req.body

		const isPayloadSchemaValid = ValidatePayloadSchemaService.run(payloadData)

		if (!isPayloadSchemaValid) {
			return ResponseService.json(res, 400, { error: "InvalidDataSupplied" })
		}

		const newPayload = await RegisterNewPayloadService.run(payloadData)

		if (newPayload) {
			EventService.triggerEvent("PayloadRegistered", { delivery_payload_id: newPayload.id })

			return ResponseService.json(res, 200, { ...newPayload })
		} else {
			return ResponseService.json(res, 500, { error: "ServiceFailed" })
		}
	}
}

export default new PayloadController()
