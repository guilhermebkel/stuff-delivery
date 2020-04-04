import DeliveryPayload from "@hermes/models/DeliveryPayload"

class RetrieveDeliveryPayloadService {
	async run({ id }: { id: number }) {
		const deliveryPayload = await DeliveryPayload.findOne({
			where: { id },
		})
		
		if (deliveryPayload) {
			return deliveryPayload
		} else {
			return null
		}
	}
}

export default new RetrieveDeliveryPayloadService()
