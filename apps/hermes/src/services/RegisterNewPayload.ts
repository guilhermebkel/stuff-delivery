import { PayloadSchema } from "@hermes/interfaces/DeliveryPayload"

import DeliveryPayload from "@hermes/models/DeliveryPayload"

class RegisterNewPayloadService {
	async run(data: PayloadSchema) {
		const trackingCode = this.generateTrackingCode()

		const newPayload = await DeliveryPayload.create({
			name: data.name,
			payload_dimensions: data.payloadDimensions,
			receiver: data.receiver,
			sender: data.sender,
			tracking_code: trackingCode
		})

		return {
			id: newPayload.id,
			tracking_code: newPayload.tracking_code
		}
	}

	private generateTrackingCode() {
		const prefix = "SS"
		const suffix = "BR"

		const randomNumbers = Math.floor(Math.random() * 1000000000)

		const params = [prefix, randomNumbers, suffix]

		const trackingCode = params.join("")

		return trackingCode
	}
}

export default new RegisterNewPayloadService()
