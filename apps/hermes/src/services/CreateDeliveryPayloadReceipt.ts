import DeliveryPayloadReceipt from "@hermes/models/DeliveryPayloadReceipt"

class CreateDeliveryPayloadReceiptService {
	async run({ delivery_payload_id, name, path }: { delivery_payload_id: number, name: string, path: string}) {
		const newDeliveryPayloadReceipt = await DeliveryPayloadReceipt.create({
			delivery_payload_id,
			name,
			path
		})

		return newDeliveryPayloadReceipt
	}
}

export default new CreateDeliveryPayloadReceiptService()
